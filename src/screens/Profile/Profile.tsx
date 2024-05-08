import React from 'react';
import {View, Text} from 'react-native';
import { Strings } from '../../utils/Strings';
import style from './style';

function Profile() {
  return (
    <View style={style.MainContainer}>
      <Text style={style.text}>{Strings.profile}</Text> 
    </View>
  );
}

export default Profile;
