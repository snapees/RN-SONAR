/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryCandlestick,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from 'victory-native';

// const data = [
//   {x: new Date(2016, 6, 1), y: 0, open: 5, close: 10, high: 15, low: 0},
//   {x: new Date(2016, 6, 2), y: 5, open: 10, close: 15, high: 20, low: 5},
//   {x: new Date(2016, 6, 3), y: 10, open: 15, close: 20, high: 22, low: 10},
//   {x: new Date(2016, 6, 4), y: 15, open: 20, close: 13, high: 25, low: 7},
//   {x: new Date(2016, 6, 5), y: 20, open: 11, close: 8, high: 15, low: 5},
//   {x: new Date(2016, 6, 6), y: 25, open: 8, close: 5, high: 10, low: 3},
// ];

const data = [
  {x: new Date(2016, 6, 1), y: 0, open: 5, close: 10, high: 15, low: 0},
  {x: new Date(2016, 6, 2), y: 5, open: 10, close: 15, high: 20, low: 5},
  {x: new Date(2016, 6, 3), y: 10, open: 15, close: 20, high: 22, low: 10},
  {x: new Date(2016, 6, 4), y: 15, open: 20, close: 13, high: 25, low: 7},
  {x: new Date(2016, 6, 5), y: 20, open: 11, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 6), y: 25, open: 8, close: 5, high: 10, low: 3},
  {x: new Date(2016, 6, 7), y: 30, open: 9, close: 12, high: 18, low: 6},
  {x: new Date(2016, 6, 8), y: 35, open: 12, close: 15, high: 20, low: 8},
  {x: new Date(2016, 6, 9), y: 40, open: 15, close: 18, high: 22, low: 10},
  {x: new Date(2016, 6, 10), y: 45, open: 18, close: 20, high: 25, low: 12},
  {x: new Date(2016, 6, 11), y: 50, open: 20, close: 22, high: 28, low: 15},
  {x: new Date(2016, 6, 12), y: 55, open: 22, close: 18, high: 30, low: 15},
  {x: new Date(2016, 6, 13), y: 60, open: 25, close: 20, high: 32, low: 18},
  {x: new Date(2016, 6, 14), y: 65, open: 28, close: 22, high: 35, low: 20},
  {x: new Date(2016, 6, 15), y: 70, open: 30, close: 25, high: 38, low: 22},
  {x: new Date(2016, 6, 16), y: 75, open: 32, close: 28, high: 40, low: 25},
  {x: new Date(2016, 6, 17), y: 80, open: 35, close: 30, high: 42, low: 28},
  {x: new Date(2016, 6, 18), y: 85, open: 38, close: 32, high: 45, low: 30},
  {x: new Date(2016, 6, 19), y: 90, open: 40, close: 35, high: 48, low: 32},
  {x: new Date(2016, 6, 20), y: 95, open: 42, close: 45, high: 50, low: 35},
];

export default function CandlestickChart() {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    Dimensions.addEventListener('change', ({window}) => {
      if (window.width > window.height) {
        setOrientation('landscape');
      } else {
        setOrientation('portrait');
      }
    });
  }, []);

  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.chartContainer,
          orientation === 'portrait'
            ? {transform: [{rotate: '90deg'}]}
            : {transform: [{rotate: '0deg'}]},
          isLandscape ? styles.chartContainerLandscape : null,
        ]}>
        <VictoryChart
          width={isLandscape ? width * 0.8 : width * 1.6}
          height={isLandscape ? height * 0.8 : height * 0.35}
          // theme={VictoryTheme.material}
          domainPadding={{x: 10, y: 10}}
          scale={{x: 'time', y: 'linear'}}>
          <VictoryAxis tickFormat={t => `${t.getDate()}/${t.getMonth()}`} />
          {/* <VictoryAxis dependentAxis /> */}
          <VictoryCandlestick
            data={data}
            candleColors={{positive: '#fa0707', negative: '#0400fa'}}
          />
        </VictoryChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  chartContainer: {
    marginTop: 325,
    width: 350,
    height: 350,
  },
  chartContainerLandscape: {
    marginRight: 400,
  },
});
