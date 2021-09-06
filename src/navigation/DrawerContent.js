import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import {Container} from 'components/Container';
import styled from 'styled-components/native';
import {defaultValues} from 'styles';
import SearchProduct from 'components/SearchProduct';
import {CustomButton} from 'components/Button';

const {width} = Dimensions.get('window');

export class DrawerContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onCategoryPress = this.onCategoryPress.bind(this);
    this.onNavigate = this.onNavigate.bind(this);
  }
  onCategoryPress(category) {
    return this.props.navigation.navigate('Shop', {filterCategory: category});
  }
  onNavigate(name) {
    return this.props.navigation.navigate(name);
  }
  render() {
    return (
      <Container isPadding={false}>
        <ScrollView>
          <View style={{margin: 10, marginTop: 20}}>
            <SearchProduct />
          </View>
          <View style={{marginTop: 20}}>
            <SectionText>Menu</SectionText>
            <DrawerButton
              onPress={this.onNavigate.bind(this, 'Home')}
              style={{marginLeft: 30, marginVertical: 10}}
              text="HOME"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.3}}
            />
            <DrawerButton
              onPress={this.onNavigate.bind(this, 'Shop')}
              style={{marginLeft: 30, marginVertical: 10}}
              text="Shop"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.3}}
            />
            <DrawerButton
              style={{marginLeft: 30, marginVertical: 10}}
              text="About us"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.3}}
            />
            <DrawerButton
              style={{marginLeft: 30, marginVertical: 10}}
              text="Digi gold"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.19}}
            />
            <DrawerButton
              style={{marginLeft: 30, marginVertical: 10}}
              text="Contect us"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.3}}
            />
            <DrawerButton
              style={{marginLeft: 30, marginVertical: 10}}
              text="Digital gold plans"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.3}}
            />
          </View>
          <View style={{marginTop: 20}}>
            <SectionText>CATEGORIES</SectionText>
            <DrawerButton
              style={{marginLeft: 30, marginVertical: 10}}
              text="Bangles"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
              onPress={this.onCategoryPress.bind(this, 'Bangles')}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.3}}
            />
            <DrawerButton
              style={{marginLeft: 30, marginVertical: 10}}
              text="Gents Ring"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
              onPress={this.onCategoryPress.bind(this, 'Gents Ring')}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.3}}
            />
            <DrawerButton
              style={{marginLeft: 30, marginVertical: 10}}
              text="Ladies Ring"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
              onPress={this.onCategoryPress.bind(this, 'Ladies Ring')}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.2}}
            />
            <DrawerButton
              style={{marginLeft: 30, marginVertical: 10}}
              text="Necklaces"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
              onPress={this.onCategoryPress.bind(this, 'Necklaces')}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.2}}
            />
            <DrawerButton
              style={{marginLeft: 30, marginVertical: 10}}
              text="Earrings"
              textStyle={{color: '#c3c7c3', fontSize: 13}}
              onPress={this.onCategoryPress.bind(this, 'Earrings')}
            />
            <View
              style={{borderBottomColor: '#c3c7c3', borderBottomWidth: 0.2}}
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
export default DrawerContent;
const SectionText = styled.Text`
  font-size: 19px;
  font-weight: normal;
  margin-left: 10px;
  color: ${defaultValues.textColor};
`;
const DrawerButton = styled(CustomButton)``;
