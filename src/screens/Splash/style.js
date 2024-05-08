import React from 'react';
import {StyleSheet} from 'react-native';
import { Colors } from '../../themes';
import {hp} from '../../themes/Metrix';

// Creating and exporting a stylesheet object with styles for the component
export default StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    textAlign: 'center',
    fontSize: hp(5),
    fontWeight: '300',
    color: Colors.black
  },
});
