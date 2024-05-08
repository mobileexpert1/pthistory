import React from 'react';
import {View, Text} from 'react-native';
import { Strings } from '../../utils/Strings';
import style from './style';

function Chat() {
  return (
    <View style={style.MainContainer}>
      <Text style={style.text}>{Strings.chat}</Text> 
    </View>
  );
}

export default Chat;
