import React from 'react';
import {View, Text} from 'react-native';
import { Strings } from '../../utils/Strings';
import style from './style';

function MyDocs() {
  return (
    <View style={style.MainContainer}>
      <Text style={style.text}>{Strings.mydocs}</Text> 
    </View>
  );
}

export default MyDocs;
