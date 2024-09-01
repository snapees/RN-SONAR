/* eslint-disable @typescript-eslint/no-unused-vars */
import {FlatList} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../store/context/auth-context';
import ProfileCard from '../components/UI/ProfileCard';
import {cases} from '../data/data';

function WelcomeScreen() {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  function renderMealItem(itemData: {item: any}) {
    const item = itemData.item;

    const profileCardProps = {
      caseID: item.caseID,
      name: item.name,
      surgery: item.surgery,
      duration: item.duration,
      profileImage: item.profileImage,
      status: item.status,
      age: item.age,
      gender: item.gender,
      hospital: item.hospital,
    };

    return <ProfileCard {...profileCardProps} />;
  }
  return (
    <FlatList
      data={cases}
      // keyExtractor={item => item.caseID}
      renderItem={renderMealItem}
    />
  );
}

export default WelcomeScreen;
