import {Dimensions} from 'react-native';

// Getting the width and height of the device's screen
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// Function to calculate width percentage based on the device's screen width
export function wp(percentage: number) {
  // Calculate the width percentage
  let calculatedWidth = (percentage / 100) * width;
  return calculatedWidth;
}

// Function to calculate height percentage based on the device's screen height
export function hp(percentage: number) {
  // Calculate the height percentage
  let calculatedHeight = (percentage / 100) * height;
  return calculatedHeight;
}
