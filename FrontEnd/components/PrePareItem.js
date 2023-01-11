import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//Styles
import {prePareItemStyle} from '../styles/components';

const prePareItem = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={prePareItemStyle.container}>
      <View style={prePareItemStyle.leftContent}>
        <Text>CH</Text>
        <Text style={prePareItemStyle.leftText}>Sleeping Bacg</Text>
      </View>
      <View style={prePareItemStyle.rightContent}>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={prePareItemStyle.plusAndSour}>
          <Text style={prePareItemStyle.inText}>+</Text>
        </TouchableOpacity>
        <Text style={prePareItemStyle.rightText}>{count}</Text>
        <TouchableOpacity
          onPress={() => count > 0 && setCount(count - 1)}
          style={prePareItemStyle.plusAndSour}>
          <Text style={prePareItemStyle.inText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default prePareItem;
