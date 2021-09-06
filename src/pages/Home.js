import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {MenuIcon} from 'assets/Svg';
import styled from 'styled-components/native';
import {defaultValues} from '../styles';
import {Container, GradientBackground} from 'components';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const {width} = Dimensions.get('window');
const colors = [
  {
    uri: 'https://c4.wallpaperflare.com/wallpaper/884/585/105/look-girl-style-model-wallpaper-preview.jpg',
    quote: 'jewelry with a \nmodern twist.',
    color: '#e6e2d8',
  },
  {
    uri: 'https://i.pinimg.com/originals/04/cc/fe/04ccfed6ae83b01f726d5d154fcabb72.jpg',
    quote: 'A gift for \nsomeone \nspecial.',
    // position: 'right',
    color: '#525454',
  },
  {
    uri: 'https://storage.googleapis.com/media.nacjewellers.com/resources/collection_files/rewind/All%20Collection%20Mobile%2001.jpg',
    // quote: 'Addition \nto their \nbeauty.',
    // color: '#d9c07c',
  },
];

const categories = [
  {
    uri: 'https://3.imimg.com/data3/XI/KA/GLADMIN-1008/gold-bracelets-500x500.png',
    name: 'Bangles',
  },
  {
    uri: 'https://assets.stickpng.com/images/580b585b2edbce24c47b241d.png',
    name: 'Gents Ring',
  },
  {
    uri: 'https://pngimg.com/uploads/necklace/necklace_PNG68.png',
    name: 'Necklaces',
  },
  {
    uri: 'https://i.pinimg.com/originals/9a/5b/bf/9a5bbf4e488b04c684cc931c2458929b.png',
    name: 'Ladies Ring',
  },
  {
    uri: 'https://gcollins.imgix.net/products/1447-1.png?format=auto,compress&w=600',
    name: 'Earrings',
  },
];

const deals = [
  {
    product_code: 'DC-BR-029',
    name: 'DC-BR-029',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/07/DC-BR-029_1553509408-300x300.jpg',
    desc: 'Tanika Antique Jewellery – Earrings 24 KT yellow gold',
    category: 'Bangles',
    price: 62651,
    breakup: [
      {
        Product_details: {
          Product_code: 'DC-BR-029',
        },
        Metal_Details: {
          Gross_weight: '13 gram',
          Color: 'Yellow',
          Gold: '12.816 gram - 18 KT',
        },
        Price_brakeup: {
          Metal: 47573,
          VA: 13253,
          GST: 1825,
          Total: 62651,
        },
      },
    ],
  },
  {
    product_code: 'DC-BR-012',
    name: 'DC-BR-012',
    desc: 'Diamond Jewellery - 18Kt Yellow Gold (16.662 gram) with diamonds (1.14 cts)',
    category: 'Bracelet',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/06/DC-BR-0012_1553351624-300x300.jpg',
    price: 140160,
    breakup: [
      {
        Product_details: {
          Product_code: 'DC-BR-029',
        },
        Metal_Details: {
          Gross_weight: '13 gram',
          Color: 'Yellow',
          Gold: '12.816 gram - 18 KT',
        },
        Price_brakeup: {
          Metal: 47573,
          VA: 13253,
          GST: 1825,
          Total: 62651,
        },
      },
    ],
  },
  {
    product_code: 'DC-BR-018',
    name: 'DC-BR-018',
    desc: 'Diamond Jewellery - 18Kt Gold (18.68 gram) with diamonds (1.59 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/06/DC-BR-018_1553251665-300x300.jpg',
    category: 'Bracelet',
    price: 240873,
    breakup: [
      {
        Product_details: {
          Product_code: 'DC-BR-029',
        },
        Metal_Details: {
          Gross_weight: '13 gram',
          Color: 'Yellow',
          Gold: '12.816 gram - 18 KT',
        },
        Price_brakeup: {
          Metal: 47573,
          VA: 13253,
          GST: 1825,
          Total: 62651,
        },
      },
    ],
  },
  {
    product_code: 'DC-BR-022',
    name: 'DC-BR-022',
    desc: 'Diamond Jewellery - 18Kt Yellow Gold (12.934 gram) with diamonds (0.17 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/05/DC-BR-022_1553508772-300x300.jpg',
    category: 'Bracelet',
    price: 71983,
    breakup: [
      {
        Product_details: {
          Product_code: 'DC-BR-029',
        },
        Metal_Details: {
          Gross_weight: '13 gram',
          Color: 'Yellow',
          Gold: '12.816 gram - 18 KT',
        },
        Price_brakeup: {
          Metal: 47573,
          VA: 13253,
          GST: 1825,
          Total: 62651,
        },
      },
    ],
  },
  {
    product_code: 'DC-BR-047',
    name: 'Diamond Jewellery – Bracelet 22 KT yellow gold',
    desc: 'Diamond Jewellery - Yellow Multi (6.074 gram) with diamonds (0.18 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/04/DE-2386.jpg',
    category: 'Earrings',
    price: 50452,
    breakup: [
      {
        Product_details: {
          Product_code: 'DC-BR-029',
        },
        Metal_Details: {
          Gross_weight: '13 gram',
          Color: 'Yellow',
          Gold: '12.816 gram - 18 KT',
        },
        Price_brakeup: {
          Metal: 47573,
          VA: 13253,
          GST: 1825,
          Total: 62651,
        },
      },
    ],
  },
];
export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onCategoryPress = this.onCategoryPress.bind(this);
  }
  onCategoryPress(category) {
    return this.props.navigation.navigate('Shop', {filterCategory: category});
  }
  render() {
    let {navigation} = this.props;
    return (
      <Container isPadding={false}>
        <ScrollView>
          {/* <GradientBackground
          isHorizontal={true}
          topColor={'#CC868A'}
          bottomColor={'#c77fa4'}> */}
          <Navbar>
            <MenuIconView onPress={() => navigation.openDrawer()}>
              <MenuIcon />
            </MenuIconView>
            <Logo source={require('../assets/tiara_logo.png')}>
              TIARA BY TJ
            </Logo>
          </Navbar>
          {/* </GradientBackground> */}
          <View style={{height: 290}}>
            <SwiperFlatList
              autoplay
              autoplayDelay={4}
              autoplayLoop
              autoplayLoopKeepAnimation
              index={0}
              data={colors}
              renderItem={({item}) => (
                <React.Fragment>
                  <View>
                    <Image
                      style={[{width, height: 290, maxHeight: 290}]}
                      source={{uri: item.uri}}
                      // blurRadius={2}
                    />
                  </View>
                  <Text
                    style={{
                      marginTop: 18,
                      marginLeft: item.position === 'right' ? 0 : 16,
                      right: item.position === 'right' ? 16 : null,
                      fontSize: 28,
                      fontWeight: '700',
                      fontFamily: 'sans-serif-condensed',
                      color: item.color,
                      position: 'absolute',
                    }}>
                    {item.quote}
                  </Text>
                </React.Fragment>
              )}
            />
          </View>
          <Text
            style={{
              fontSize: 23,
              color: defaultValues.textColor,
              marginTop: 10,
              marginLeft: 10,
            }}>
            Categories
          </Text>
          <View style={{flexDirection: 'row'}}>
            <FlatList
              data={categories}
              horizontal
              keyExtractor={i => i.uri}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <CategoryView
                  onPress={this.onCategoryPress.bind(this, item.name)}>
                  <CategoryImage
                    source={{
                      uri: item.uri,
                    }}
                    style={{width: 100, height: 100}}
                  />
                  <CategoryText>{item.name}</CategoryText>
                </CategoryView>
              )}
            />
          </View>
          <Text
            style={{
              fontSize: 23,
              color: defaultValues.textColor,
              marginTop: 10,
              marginLeft: 10,
            }}>
            Today's deals
          </Text>
          <View>
            <FlatList
              data={deals}
              keyExtractor={i => i.name}
              horizontal
              style={{marginBottom: 40, marginTop: 10}}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={{
                    width: 120,
                    backgroundColor: '#fff',
                    margin: 6,
                    borderRadius: 8,
                    paddingTop: 10,
                  }}>
                  <Image
                    source={{uri: item.image_url}}
                    style={{width: 120, height: 120}}
                  />
                  <View style={{marginVertical: 10}}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={{fontSize: 14, marginLeft: 10}}>
                      {item.name}
                    </Text>
                    <Price>₹{item.price}</Price>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Home;

const Navbar = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 8px;
`;
const MenuIconView = styled.TouchableOpacity`
  margin: auto 7px;
`;
const Logo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${defaultValues.textColor};
`;

const CategoryView = styled.TouchableOpacity`
  margin: 10px;
`;
const CategoryImage = styled.Image`
  margin: 8px;
`;
const CategoryText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${defaultValues.textColor};
`;
const Price = styled.Text`
  margin-left: 10px;
  font-size: 14px;
`;
