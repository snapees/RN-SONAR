/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import IconButton from '../components/UI/IconButton';
import Input from '../components/Auth/Input';
import Dropdown from '../components/UI/Dropdown';
import Button from '../components/UI/Button';
import {Colors} from '../constants/colors';
import {hospital, profession} from '../data/data';

export default function Profile() {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredProfession, setEnteredProfession] = useState('');
  const [enteredHospital, setEnteredHospital] = useState('');

  const cameraHandler = () => {
    console.log('cameraHandler');
  };

  function updateInputValueHandler(inputType: string, enteredValue: string) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'name':
        setEnteredName(enteredValue);
        break;
      case 'profession':
        setEnteredProfession(enteredValue);
        break;
      case 'hospital':
        setEnteredHospital(enteredValue);
        break;
    }
  }

  function submitHandler() {}

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/a/ACg8ocIDWflACVzhFZqJY6FpB1ywws2y3TT1IY4vqip8I_yjreumr6s=s96-c-rg-br100',
          }}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <View style={styles.cameraBtn}>
          <IconButton
            icon="camera"
            color="white"
            size={25}
            onPress={cameraHandler}
          />
        </View>
      </View>
      <View style={styles.profileDetailsContainer}>
        <Input
          label="Name"
          type="name"
          onUpdateValue={updateInputValueHandler}
          value={enteredName}
          keyboardType="default"
          isInvalid={false}
        />
        <Input
          label="Email Address"
          type="email"
          onUpdateValue={updateInputValueHandler}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={false}
        />
        <Dropdown
          type="profession"
          dataSet={profession}
          keyData="professionName"
          placeHolder="Select Profession"
          onSelect={updateInputValueHandler}
        />
        <Dropdown
          type="hospital"
          dataSet={hospital}
          keyData="hospitalName"
          placeHolder="Select Hospital"
          onSelect={updateInputValueHandler}
        />
      </View>
      <View style={styles.updateButton}>
        <Button onPress={submitHandler}>Update</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    margin: 10,
    borderWidth: 2,
    borderColor: Colors.common.grey,
    borderRadius: 80,
    padding: 10,
  },
  cameraBtn: {
    position: 'absolute',
    bottom: 5,
  },
  profileDetailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButton: {
    alignSelf: 'stretch',
  },
});
