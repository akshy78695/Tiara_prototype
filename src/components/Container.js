import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {defaultValues} from '../styles';
let {width, height} = Dimensions.get('window');

export class Container extends Component {
  render() {
    let {style, isPadding} = this.props;
    return (
      <ContainerView style={style} isPadding={isPadding}>
        {this.props.children}
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  background-color: ${defaultValues.backgroundColor};
  flex: 1;
  padding: ${props => (props.isPadding === false ? 0 : 14)}px;
`;
