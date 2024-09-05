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
import {chartData} from '../../data/data';

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
            data={chartData}
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
