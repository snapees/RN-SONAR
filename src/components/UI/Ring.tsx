import {ColorSchemeName, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../hooks/useTheme';
import {Colors} from '../../constants/colors';

interface HealthRingProps {
  value: number; // Current value
  title: string;
  active: string;
  onPress: (title: string) => void;
}

const Ring: React.FC<HealthRingProps> = ({value, title, active, onPress}) => {
  const {colorScheme} = useTheme();
  const styles = getStyles(colorScheme);
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => pressed && styles.pressed}
        onPress={() => onPress(title)}>
        <View style={[styles.ring, active === title && styles.active]}>
          <Text style={styles.ringValue}>{value}</Text>
        </View>
      </Pressable>
      <Text style={styles.ringTitle}>{title}</Text>
    </View>
  );
};

const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    ring: {
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 6,
      borderRadius: 50,
      borderColor: Colors.common.grey,
      marginHorizontal: 15,
    },
    active: {
      borderColor: '#4c53af',
    },
    ringValue: {
      overflow: 'hidden',
      fontSize: 24,
      color: Colors[colorScheme ?? 'light'].textColor,
    },
    ringTitle: {
      fontSize: 14,
      // color: Colors.common.grey,
      marginTop: 5,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    pressed: {
      opacity: 0.7,
    },
  });
};

export default Ring;
