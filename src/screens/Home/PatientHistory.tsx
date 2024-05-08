import React, {useState} from 'react';
import {View, Text, SectionList} from 'react-native';
import ImageIcon from '../../components/common/ImageIcon';
import {Colors, Images} from '../../themes/index';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../../components/screens/patientHistory/SearchBar';
import HeaderItem from '../../components/screens/patientHistory/HeaderItem';
import PatientItem from '../../components/screens/patientHistory/PatientItem';
import {Strings} from '../../utils/Strings';
import PatientHistoryData from '../../utils/PatientHistoryData.json';

function PatientHistory() {
  const [searchedText, setSearchedText] = useState('');
  const [list, setList] = useState(PatientHistoryData);

  /** Searching Patient by their name **/
  const searchPatient = (text: React.SetStateAction<string>) => {
    setSearchedText(text);
    if (text === '') {
      setList(PatientHistoryData);
    } else {
      let textToSearch = text?.toLowerCase();
      var temp = [];
      list.map(item => {
        var dataItem = {};
        var title = item.title;
        var brandData = [];
        item.data.map(searchItem => {
          let flatName = searchItem.name.toLowerCase();
          if (flatName.match(textToSearch)) {
            brandData.push(searchItem);
          } else {
          }
        });
        if (brandData.length > 0) {
        } else {
          return null;
        }
        dataItem.title = title;
        dataItem.data = brandData;
        temp.push(dataItem);
        setList(temp);
      });
    }
  };

  /** Function to handle add button  **/
  const handleAdd = () => {
    alert('Add Icon Pressed');
  };

  return (
    <View style={style.MainContainer}>
      <LinearGradient
        start={{x: 1.3, y: 0}}
        colors={Colors.gradientPlaceBackground}
        style={style.topView}>
        <ImageIcon
          onPress={() => {
            alert('Icon Pressed');
          }}
          source={Images.back}
          width={20}
          height={20}
          enableRadius={false}
          resizeMode="contain"
        />
        <Text style={style.topText}>{Strings.patientHistory}</Text>
        <ImageIcon
          source={Images.find}
          width={20}
          height={20}
          resizeMode="contain"
          onPress={() => {
            alert('Icon Pressed');
          }}
          enableRadius={false}
        />
      </LinearGradient>
      <SearchBar
        value={searchedText}
        onChangeText={searchPatient}
        placeholder={Strings.patientHistoryPlaceholder}
      />
      <SectionList
        sections={list}
        style={style.sectionView}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, title}) => (
          <PatientItem title={title} item={item} handleAdd={handleAdd} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <HeaderItem value={title} />
        )}
      />
    </View>
  );
}

export default PatientHistory;
