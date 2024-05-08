import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../themes/Colors';
import moment from 'moment';
import Images from '../../../themes/Images';
import { hp,wp } from '../../../themes/Metrix';
import ImageIcon from '../../common/ImageIcon';

const PatientItem = (props: { item: any; handleAdd: any; }) => {
   // Destructuring item and handleAdd from props
  const {item, handleAdd} = props;

  return (
    <View style={styles.outerView}>
      <ImageIcon
        source={item.image}
        width={hp(6)}
        height={hp(6)}
        enableRadius
      />
      {/* Container for patient information */}
      <View style={styles.infoWrapper}>
        <Text style={styles.timeText}>{moment.unix(item.time).fromNow()}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
      <ImageIcon
        source={Images.plus}
        width={hp(3)}
        height={hp(3)}
        onPress={handleAdd}
        enableRadius={false}
      />
    </View>
  );
};

export default PatientItem;

// Creating styles for the component
const styles = StyleSheet.create({
  outerView: {
    width: wp(90),
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: hp(1.2),
  },
  infoWrapper: {
    width: '75%',
    marginLeft: 5,
  },
  timeText: {
    color: Colors.white,
    fontSize: hp(2.1),
  },
  nameText: {
    color: Colors.white,
    fontSize: hp(2.5),
    fontWeight: '600',
  },
});
