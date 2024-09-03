import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {cases} from '../data/data';
import CollapsibleCard from '../components/UI/CollapsibleCard';
import {getFormattedDate} from '../util/helper';
// import HealthRing from '../components/UI/HealthRing';
import {Colors} from '../constants/colors';
import IconButton from '../components/UI/IconButton';
import LineChart from '../components/Charts/LineChart';
import FloatingButton from '../components/UI/FloatingButton';
import Ring from '../components/UI/Ring';

export default function PatientDashboard({route}) {
  const [activeRing, setActiveRing] = useState<string>('');
  const {caseID} = route.params;
  const collapsibleCardProps = cases.find(
    eachCase => eachCase.caseID === caseID,
  );

  const expandHandler = () => {
    console.log('expand');
  };

  const requestReadingHandler = () => {
    console.log('requestReadingHandler');
  };

  const ringPressHandler = (ringTitle: string) => {
    setActiveRing(ringTitle);
  };

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        {collapsibleCardProps && <CollapsibleCard {...collapsibleCardProps} />}
        <Text style={styles.todaysDate}>{getFormattedDate(new Date())}</Text>
        <View style={styles.rings}>
          {/* <HealthRing
            value={75}
            maxValue={100}
            radius={40}
            strokeWidth={8}
            title="Temperature"
          />
          <HealthRing
            value={25}
            maxValue={100}
            radius={40}
            strokeWidth={8}
            title="Skin"
          />
          <HealthRing
            value={15}
            maxValue={100}
            radius={40}
            strokeWidth={8}
            title="Redness"
          /> */}
          <Ring
            value={75}
            title="Temperature"
            active={activeRing}
            onPress={ringPressHandler}
          />
          <Ring
            value={25.5}
            title="Skin"
            active={activeRing}
            onPress={ringPressHandler}
          />
          <Ring
            value={15.3}
            title="Redness"
            active={activeRing}
            onPress={ringPressHandler}
          />
        </View>
        <View style={styles.infoBox}>
          <View>
            <Text>Reference</Text>
            <Text>Time: 6:30 am</Text>
          </View>
          <View style={styles.infoBoxRightItem}>
            <Text>At Time</Text>
            <Text>Time: 10:30 am</Text>
          </View>
        </View>
        <View style={[styles.chart]}>
          <View style={styles.expandBtn}>
            <IconButton
              icon="expand"
              color="black"
              size={15}
              onPress={expandHandler}
            />
          </View>
          <LineChart />
        </View>
        <View>
          <FloatingButton
            iconName="chatbox-outline"
            color="white"
            size={30}
            onPress={requestReadingHandler}
            position={{bottom: -200, right: -200}}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  todaysDate: {
    alignSelf: 'flex-start',
    marginHorizontal: 5,
  },
  rings: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginVertical: 10,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: Colors.common.grey,
    borderWidth: 1,
    width: '100%',
    paddingVertical: 15,
    marginVertical: 7,
    backgroundColor: '#f9f9f9',
  },
  infoBoxRightItem: {
    borderLeftColor: Colors.common.grey,
    borderLeftWidth: 1,
    paddingLeft: 30,
  },
  chart: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderColor: Colors.common.grey,
    borderWidth: 1,
    width: '100%',
    height: 300,
    // paddingVertical: 15,
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  expandBtn: {
    alignSelf: 'flex-end',
  },
});
