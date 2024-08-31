/* eslint-disable react/react-in-jsx-scope */
import {PropsWithChildren} from 'react';
import {ColorSchemeName, Pressable, StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../constants/colors';
import {useTheme} from '../../hooks/useTheme';

interface FlatButtonProps {
  onPress: () => void;
}

function FlatButton({children, onPress}: PropsWithChildren<FlatButtonProps>) {
  const {colorScheme} = useTheme();
  const styles = getStyles(colorScheme);

  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    button: {
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
    pressed: {
      opacity: 0.7,
    },
    buttonText: {
      textAlign: 'center',
      color: Colors[colorScheme ?? 'light'].primary100,
    },
  });
};
