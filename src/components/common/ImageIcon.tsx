import React, {useMemo} from 'react';
import {Platform, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, Images} from '../../themes';

// Function to calculate border radius based on width (used for circular images on iOS)
const borderRadius = width => (Platform.OS === 'ios' ? width / 2 : 200);

// Defining the ImageIcon component
const ImageIcon = props => {
  // Destructuring props
  const {
    bgColor,
    onPress,
    enableRadius,
    height,
    width,
    source,
    marginTop,
    minHeight,
    style,
    defaultSource,
  } = props;

  // Memoizing image style to optimize rendering performance
  const imageStyle = useMemo(() => {
    return {
      backgroundColor: bgColor,
      borderRadius: enableRadius ? borderRadius(width) : 0,
      height: height,
      marginTop: marginTop,
      minHeight: minHeight,
      width: width,
      ...style,
    };
  }, [style, bgColor, height, marginTop, minHeight, width, enableRadius]);

  // Memoizing source URL to handle different types of image sources
  const sourceUrl = useMemo(() => {
    if (source) {
      if (typeof source === 'object') {
        if (source.uri) return source;
        else return defaultSource;
      } else return source;
    } else return defaultSource;
  }, [source, defaultSource]);

  // Rendering the TouchableOpacity wrapping the Image component
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={imageStyle} source={sourceUrl} />
    </TouchableOpacity>
  );
};

// Default props for ImageIcon component
ImageIcon.defaultProps = {
  style: {}, // Default style object
  height: 30,
  width: 30,
  bgColor: Colors.transparent,
  enableRadius: true,
  borderRadius: null,
  defaultSource: Images.noPhoto,
  marginTop: 0,
  minHeight: 0,
};

export default React.memo(ImageIcon);
