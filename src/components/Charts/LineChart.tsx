/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useState} from 'react';
import {
  useFont,
  Text as SKText,
  LinearGradient,
  vec,
  Circle,
} from '@shopify/react-native-skia';
import {Area, CartesianChart, Line, useChartPressState} from 'victory-native';
import {useTheme} from '../../hooks/useTheme';
import {useDerivedValue, type SharedValue} from 'react-native-reanimated';
import IconButton from '../UI/IconButton';

const DATA = Array.from({length: 50}, (_, i) => ({
  time: i,
  skin: 40 + 30 * Math.random(),
  redness: 20 + 30 * Math.random(),
  temperature: 60 + 30 * Math.random(),
}));

const inter = require('../../assets/roboto.ttf');
const interBold = require('../../assets/roboto-bold.ttf');

export default function LineChart() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(DATA.length / itemsPerPage);
  const currentItems = DATA.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const font = useFont(inter, 12);
  const fontBold = useFont(interBold, 12);
  const {state, isActive} = useChartPressState({
    x: 0,
    y: {time: 0, skin: 0, redness: 0, temperature: 0},
  });
  const {colorScheme} = useTheme();
  const [chartData, setChartData] = useState(DATA);
  // console.log('data-', DATA);

  const value = useDerivedValue(() => {
    return state.y.temperature.value.value.toFixed(2);
  }, [state]);

  const labelColor = colorScheme === 'dark' ? 'grey' : 'black';
  const lineColor = colorScheme === 'dark' ? 'lightgrey' : 'black';

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View
      style={{
        paddingTop: 10,
        width: '100%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <IconButton
        icon="arrow-back"
        size={20}
        onPress={handlePrevious}
        color="black"
        disabled={currentPage === 0}
      />
      <CartesianChart
        data={currentItems} // 👈 specify your data
        xKey="time" // 👈 specify data key for x-axis
        yKeys={['temperature']} // 👈 specify data keys used for y-axis
        domainPadding={{top: 50}}
        axisOptions={{font, labelColor, lineColor}} // 👈 we'll generate axis labels using given font.
        chartPressState={state}>
        {({points, chartBounds}) => (
          <>
            <SKText
              x={chartBounds.left + 10}
              y={40}
              font={fontBold}
              text={value}
              color={labelColor}
              style={'fill'}
            />
            <Line
              points={points.temperature}
              color="blue"
              strokeWidth={2}
              animate={{type: 'timing', duration: 500}}
            />

            <Area
              points={points.temperature}
              y0={chartBounds.bottom}
              animate={{type: 'timing', duration: 500}}>
              <LinearGradient
                start={vec(chartBounds.bottom, 300)}
                end={vec(chartBounds.bottom, chartBounds.bottom)}
                colors={['lightblue', 'rgba(202,238,251,0.4)']}
              />
            </Area>

            {isActive ? (
              <ToolTip x={state.x.position} y={state.y.temperature.value} />
            ) : null}
          </>
        )}
      </CartesianChart>
      <IconButton
        icon="arrow-forward"
        size={20}
        onPress={handleNext}
        color="grey"
        disabled={currentPage >= totalPages - 1}
      />
    </View>
  );
}

function ToolTip({x, y}: {x: SharedValue<number>; y: SharedValue<number>}) {
  return <Circle cx={x} cy={y} r={8} color={'blue'} opacity={0.8} />;
}
