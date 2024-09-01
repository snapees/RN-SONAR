/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {useContext} from 'react';

import {StyleSheet, View} from 'react-native';
import {AuthContext} from '../store/context/auth-context';
import {cases} from '../data/data';
import CollapsibleCard from '../components/UI/CollapsibleCard';
import Grid from '../components/UI/Grid';

function ActivateCase({route}) {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const {caseID} = route.params;
  const collapsibleCardProps = cases.find(
    eachCase => eachCase.caseID === caseID,
  );

  return (
    <View style={styles.rootContainer}>
      {collapsibleCardProps && <CollapsibleCard {...collapsibleCardProps} />}
      <Grid />
    </View>
  );
}

export default ActivateCase;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});
