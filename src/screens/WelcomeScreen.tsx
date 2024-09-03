/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {FlatList, Image, Pressable, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../store/context/auth-context';
import ProfileCard from '../components/UI/ProfileCard';
import {cases, userProfile} from '../data/data';
import FloatingButton from '../components/UI/FloatingButton';
import GlassModal from '../components/UI/GlassModal';

function WelcomeScreen({navigation}) {
  const [welcomeModal, setWlecomeModal] = useState<boolean>(false);
  const [updateProfileModal, setUpdateProfileModal] = useState<boolean>(false);

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    userProfile.firstLogin ? setWlecomeModal(true) : '';
  }, []);

  const addCaseHandler = () => {
    console.log('addCaseHandler');
  };

  const closeWelcomeHandler = () => {
    // console.log('closeWelcomeHandler');
    setWlecomeModal(false);
    !userProfile.profileUpdated && setUpdateProfileModal(true);
  };

  const updateProfile = () => {
    setUpdateProfileModal(false);
    navigation.navigate('Profile');
  };

  function renderCaseItem(itemData: {item: any}) {
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
    <>
      {welcomeModal && (
        <GlassModal
          visible={true}
          closeButton={false}
          onClose={closeWelcomeHandler}
          onSubmit={() => console.log('pressed ok')}
          modalActions={false}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/15240/15240036.png',
            }}
            style={{width: 300, height: 300, borderRadius: 0}}
          />
        </GlassModal>
      )}
      {updateProfileModal && (
        <GlassModal
          visible={true}
          closeButton={true}
          onClose={() => setUpdateProfileModal(false)}
          onSubmit={() => console.log('pressed ok')}
          modalActions={false}
          backdropDismiss={false}>
          <Pressable
            style={({pressed}) => pressed && {opacity: 0.5}}
            onPress={updateProfile}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/7324/7324172.png',
              }}
              style={{width: 300, height: 300, borderRadius: 0}}
            />
          </Pressable>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Update Profile</Text>
        </GlassModal>
      )}
      <FlatList
        data={cases}
        keyExtractor={item => `${item.caseID}`}
        renderItem={renderCaseItem}
      />
      <FloatingButton
        iconName="add"
        color="white"
        size={30}
        position={{bottom: 30, right: 20}}
        onPress={addCaseHandler}
      />
    </>
  );
}

export default WelcomeScreen;
