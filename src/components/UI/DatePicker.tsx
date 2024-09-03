/* eslint-disable curly */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Colors} from '../../constants/colors';

interface DatePickerPrpos {
  mode: 'date' | 'time' | 'datetime';
  type: string;
  placeHolder: string;
  onSelect: (value: string, type: string) => void;
}

export default function DatePicker({
  placeHolder,
  type,
  mode,
  onSelect,
}: DatePickerPrpos) {
  const [isDatePickerVisible, setIsDatePickerVisible] =
    useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<Date | string>('');

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const getformattedDateOnMode = (date: Date) => {
    console.log('date-', date);
    if (mode === 'date') return date.toLocaleDateString();
    else if (mode === 'time')
      return date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
    else
      return `${date.toLocaleDateString()} ${date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      })}`;
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = getformattedDateOnMode(date);
    setSelectedValue(formattedDate);
    onSelect(formattedDate, type);
    hideDatePicker();
  };

  const getIconPath = () => {
    if (mode === 'date') return require('../../assets/date.png');
    else if (mode === 'time') return require('../../assets/time.png');
    else return require('../../assets/datetime.png');
  };

  return (
    <View>
      {/* <Text>DatePicker</Text> */}

      <Pressable style={styles.dateInput} onPress={showDatePicker}>
        <Text style={styles.fontWeight600}>
          {selectedValue === '' ? placeHolder : selectedValue.toString()}
        </Text>

        <Image source={getIconPath()} style={styles.dateInputIcon} />
      </Pressable>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dateInput: {
    width: '100%',
    height: 40,
    borderColor: Colors.common.grey,
    borderRadius: 30,
    borderWidth: 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 8,
  },
  fontWeight600: {
    fontWeight: '600',
  },
  dateInputIcon: {
    width: 20,
    height: 20,
  },
});
