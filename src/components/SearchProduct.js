import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Search} from 'assets/Svg';
import styled from 'styled-components/native';

export class SearchProduct extends Component {
  render() {
    return (
      <SearchProductView>
        <TextInput
          placeholder="Search"
          style={{flex: 1, marginHorizontal: 7}}
        />
        <Search style={{marginHorizontal: 8}} />
      </SearchProductView>
    );
  }
}

export default SearchProduct;

const SearchProductView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border: 0.8px solid white;
  border-radius: 10px;
`;
