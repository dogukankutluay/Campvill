import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import DatePicker from 'react-native-date-picker';

// Styles
import {addTripDatePickerStlye} from '../styles/components';

//Assets
import ChevronDown from '../assets/img/chevron-down.png';

//Inline Componets

const PickerButton = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setOpen(true)}
      style={addTripDatePickerStlye.dateOpenBtn}>
      <Text style={addTripDatePickerStlye.pickerText}>
        {String(date.getDate())}-{String(date.getMonth() + 1)}-
        {String(date.getFullYear())}
      </Text>
      <Image source={ChevronDown} />
      <DatePicker
        date={date}
        modal
        mode="date"
        locale="tr"
        format="YYYY-MMM-DD"
        open={open}
        onConfirm={date => {
          setDate(date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </TouchableOpacity>
  );
};
function AddTripDatePicker() {
  return (
    <View style={addTripDatePickerStlye.container}>
      <PickerButton />
      <PickerButton />
    </View>
  );
}

export default AddTripDatePicker;
