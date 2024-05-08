import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../utils/Strings';
import style from './style';

function Splash({navigation}) {
  const navigatetoRoot = () => {
    setTimeout(() => {
      navigation.replace('Root');
    }, 3000);
  };

  useEffect(() => {
    navigatetoRoot();
  }, []);

  return (
    <View style={style.MainContainer}>
      <Text style={style.text}>{Strings.appointments}</Text>
    </View>
  );
}

export default Splash;
