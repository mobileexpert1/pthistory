import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import {Colors, Images} from '../../../themes/index';
import {hp, wp} from '../../../themes/Metrix';
import ImageIcon from '../../common/ImageIcon';

const SearchBar = (props: { placeholder: any; placeholderTextColor: any; onChangeText: any; value: any; }) => {
  // Destructuring item and handleAdd from props
  const {placeholder, placeholderTextColor, onChangeText, value} = props;

  return (
    <View style={styles.outerView}>
      <ImageIcon
        source={Images.search}
        width={hp(3)}
        height={hp(3)}
        enableRadius={false}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

SearchBar.defaultProps = {
  style: {},
  height: 30,
  width: 30,
  resizeMode: 'stretch',
  bgColor: Colors.transparent,
  enableRadius: true,
  borderRadius: null,
  defaultSource: Images.noPhoto,
  placeholderTextColor: Colors.greyMedDark,
};

const styles = StyleSheet.create({
  outerView: {
    width: wp(90),
    height: hp(8),
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginTop: -hp(4),
    justifyContent: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    alignItems: 'center',
    paddingHorizontal: wp(2),
    elevation: 3,
    borderColor: Platform.OS === 'ios' ? '#e6e6e6' : Colors.transparent,
    borderWidth: 1,
  },
  inputStyle: {
    color: Colors.black,
    fontSize: hp(2.2),
    textAlign: 'left',
    paddingHorizontal: 10,
    height: '100%',
    width: wp(70),
    marginLeft: 10,
    alignSelf: 'center',
  },
});

export default React.memo(SearchBar);
