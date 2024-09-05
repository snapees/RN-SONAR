/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CandlestickChart from '../components/UI/CandlestickChart';

export default function ChartScreen() {
  return (
    <View>
      {/* <Text>ChartScreen</Text> */}
      <CandlestickChart />
    </View>
  );
}

const styles = StyleSheet.create({});
