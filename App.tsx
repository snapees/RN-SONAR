/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */

import {StatusBar, Text, View} from 'react-native';
import AuthContextProvider, {
  AuthContext,
} from './src/store/context/auth-context';
import {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from './src/constants/colors';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import IconButton from './src/components/UI/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThemeProvider, {useTheme} from './src/hooks/useTheme';
import ActivateCase from './src/screens/ActivateCase';
import PatientDashboard from './src/screens/PatientDashboard';
import Profile from './src/screens/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './src/components/UI/CustomDrawer';
import {userProfile} from './src/data/data';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  // const colorScheme = useColorScheme();
  const {colorScheme} = useTheme();
  console.log('AuthStack Theme: ', colorScheme);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].primary500,
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].primary100,
        },
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function HeaderHome(props) {
  const {tintColor = 'white'} = props;
  const username = userProfile.userName;
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{color: tintColor, fontSize: 18, fontWeight: 'bold'}}>
        Welcome {username}
      </Text>
    </View>
  );
}

function DrawerNavigator() {
  const username = userProfile.userName;
  const email = userProfile.email;
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawer {...props} username={username} email={email} />
      )}
      screenOptions={{
        headerStyle: {backgroundColor: '#171c4a'},
        headerTintColor: 'white',
        headerTitleStyle: {fontWeight: 'bold'},
        sceneContainerStyle: {backgroundColor: '#98AFEB'},
        drawerContentStyle: {backgroundColor: '#98AFEB'},
        //drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#6f7fd1',
      }}>
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          // title: 'Home',
          drawerIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerRight: ({tintColor}) => (
            <IconButton
              icon="notifications"
              color={tintColor}
              size={24}
              onPress={() => console.log('Bell Pressed')}
            />
          ),
          headerTitle: props => <HeaderHome {...props} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: ({color, size}) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  // const colorScheme = useColorScheme();
  const {colorScheme} = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].primary500,
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].primary100,
        },
      }}>
      {/* <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({tintColor}) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      /> */}
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ActivateCase" component={ActivateCase} />
      <Stack.Screen name="PatientDashboard" component={PatientDashboard} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  useEffect(() => {
    if (!isTryingLogin) {
      const init = async () => {
        // …do multiple sync or async tasks
      };

      init().finally(async () => {
        await BootSplash.hide({fade: true});
        console.log('Bootsplash has been hidden successfully');
      });
    }
  }, [isTryingLogin]);

  if (isTryingLogin) {
    return null;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </AuthContextProvider>
      <StatusBar barStyle="default" />
    </>
  );
}
