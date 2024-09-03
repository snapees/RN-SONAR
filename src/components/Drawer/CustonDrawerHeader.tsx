import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import IconButton from '../UI/IconButton';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {userProfile} from '../../data/data';

const CustomDrawerHeader: React.FC<DrawerHeaderProps> = ({
  navigation,
  options,
}) => {
  const username = userProfile.userName;
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerMenu}>
        <IconButton
          icon="menu"
          color={options.headerTintColor}
          size={23}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
      <View style={styles.headerTitleButton}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>
            Welcome To Sonar, Mr. {username}
          </Text>
          {/* <IconButton
            icon="ellipsis-vertical"
            color={options.headerTintColor}
            size={23}
            onPress={() => console.log('Pressed')}
          /> */}
          <IconButton
            icon="notifications"
            color={options.headerTintColor}
            size={22}
            onPress={() => navigation.navigate('Notifications')}
          />
        </View>
        {/* <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Hi Dr. Abc</Text>
          <IconButton
            icon="notifications"
            color={options.headerTintColor}
            size={22}
            onPress={() => navigation.navigate('Notifications')}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#171c4a',
  },
  headerMenu: {
    alignSelf: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerTitleButton: {
    flex: 1,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CustomDrawerHeader;
