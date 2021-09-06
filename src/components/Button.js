import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {defaultValues} from 'styles';

export class CustomButton extends Component {
  render() {
    let {
      textStyle,
      style,
      text,
      rightIcon,
      leftIcon,
      rightIconStyle,
      leftIconStyle,
      onPress,
    } = this.props;
    return (
      <Container
        style={style}
        activeOpacity={defaultValues.activeOpacity}
        onPress={onPress}>
        {leftIcon && <SvgView style={leftIconStyle}>{leftIcon}</SvgView>}
        <Text style={[{textAlignVertical: 'center'}, textStyle]}>{text}</Text>
        {rightIcon && <SvgView style={rightIconStyle}>{rightIcon}</SvgView>}
      </Container>
    );
  }
}
const Container = styled.TouchableOpacity`
  flex-direction: row;
`;

const SvgView = styled.View``;
CustomButton.defaultProps = {
  style: {},
  textStyle: {},
  text: '',
};
