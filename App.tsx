/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
// import {StatusBar, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect} from 'react';
// import BootSplash from 'react-native-bootsplash';

// export default function App() {
//   // const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const init = async () => {
//       // …do multiple sync or async tasks
//     };

//     init().finally(async () => {
//       await BootSplash.hide({fade: true});
//       console.log('Bootsplash has been hidden successfully');
//     });
//   }, []);
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <Text style={styles.text}>Hello, Dave.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: '700',
//     margin: 20,
//     lineHeight: 30,
//     color: '#333',
//     textAlign: 'center',
//   },
// });

import {StatusBar} from 'react-native';
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
// import IconButton from './src/components/UI/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThemeProvider, {useTheme} from './src/hooks/useTheme';

const Stack = createNativeStackNavigator();

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
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({tintColor}) => (
            <Ionicons
              name="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
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
