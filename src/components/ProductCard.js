import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styled from 'styled-components/native';

export class ProductCard extends Component {
  render() {
    const {image_url, name, price} = this.props.item;
    const {width} = this.props;
    return (
      <CardView
        width={width}
        activeOpacity={0.9}
        // onPress={() => this.props.onProductPress(this.props.item)}
      >
        <Image
          source={{uri: image_url}}
          style={{width: width - 24, height: width}}
        />
        <View style={{marginVertical: 10}}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{fontSize: 16, marginLeft: 10}}>
            {name}
          </Text>
          <Price>₹{price}</Price>
        </View>
      </CardView>
    );
  }
}

export default ProductCard;
const CardView = styled.TouchableOpacity`
  width: ${props => props.width - 3}px;
  margin: 3px auto;
  border: 1px solid;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
`;
const Price = styled.Text`
  margin-left: 10px;
  font-size: 16px;
`;
