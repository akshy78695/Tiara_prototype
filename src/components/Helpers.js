import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Defs, Rect, LinearGradient, Stop} from 'react-native-svg';

export const GradientBackground = ({
  children,
  topColor,
  bottomColor,
  isHorizontal,
  flex,
}) => {
  return (
    <View style={{flex: flex || 0}}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient
            id="grad"
            x1="0%"
            y1="0%"
            x2={isHorizontal ? '100%' : '0%'}
            y2={!isHorizontal ? '100%' : '0%'}>
            <Stop offset="0" stopColor={topColor} />
            <Stop offset="1" stopColor={bottomColor} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {children}
    </View>
  );
};

GradientBackground.defaultProps = {
  topColor: 'rgb(255, 255, 255)',
  bottomColor: 'rgb(0,102,84)',
  isHorizontal: false,
};

export class Divider extends React.Component {
  render() {
    let {text, color, height, style} = this.props;
    return (
      <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
        <View style={{flex: 1, height: height, backgroundColor: color}} />
        <View>
          <Text style={{marginHorizontal: 5, textAlign: 'center', color}}>
            {text}
          </Text>
        </View>
        <View style={{flex: 1, height: height, backgroundColor: color}} />
      </View>
    );
  }
}

Divider.defaultProps = {
  text: '',
  color: '#ffffff',
  height: 1,
  style: {},
};
