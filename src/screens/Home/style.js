import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../themes';
import {hp, wp} from '../../themes/Metrix';

// Creating and exporting a stylesheet object with styles for the component
export default StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  topView: {
    width: wp(100),
    height: hp(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: Platform.OS == 'ios' ? hp(5): 15
  },
  topText: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: hp(3.2),
  },
  sectionView: {
    width: wp(100),
    padding: hp(2),
    marginBottom: hp(1),
    marginTop: hp(1.5)
  },
});
