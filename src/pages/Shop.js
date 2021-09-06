import React, {Component, createRef} from 'react';
import {Text, View, FlatList, Dimensions, Image} from 'react-native';
import {SearchProduct, Container, CustomButton} from 'components';
import styled from 'styled-components/native';
import {MenuIcon} from 'assets/Svg';
import {defaultValues} from '../styles';
import {Sort, Filter, Cart} from 'assets/Svg';
import ProductCard from 'components/ProductCard';

// import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const {width} = Dimensions.get('window');

const products_data = [
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
    product_code: 'DC-BR-023',
    name: 'DC-BR-023',
    desc: 'Diamond Jewellery - 18Kt Yellow Gold (16.82 gram) with diamonds (0.17 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/05/DC-BR-023_1553508939.jpg',
    category: 'Bracelet',
    price: 90979,
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
    product_code: 'DC-BR-026',
    name: 'DC-BR-026',
    desc: 'Diamond Jewellery - 18Kt Yellow Gold (11.512 gram) with diamonds (2.44 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/05/DC-BR-026_1553509258.jpg',
    category: 'Bracelet',
    price: 181936,
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
    product_code: 'DC-BR-035',
    name: 'DC-BR-035',
    desc: 'Diamond Jewellery - 18Kt Yellow Gold (11.512 gram) with diamonds (2.44 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/01/DC-BR-035_1552994729.jpg',
    category: 'Bracelet',
    price: 106286,
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
    product_code: 'DC-BR-037',
    name: 'DC-BR-037',
    dsec: 'Diamond Jewellery - 18Kt Yellow Gold (12.956 gram) with diamonds (0.22 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/05/DC-BR-023_1553508939.jpg',
    category: 'Bracelet',
    price: 74665,
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
    name: 'DC-BR-047',
    desc: 'Diamond Jewellery - 18Kt Yellow Gold (13.974 gram) with diamonds (0.13 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/05/DC-BR-047_1553065459-300x300.jpg',
    category: 'Bracelet',
    price: 78353,
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
    name: 'Diamond Earring 101',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/02/N-22ER-3D-300x300.jpg',
    category: 'Earrings',
    price: 42824,
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
  {
    product_code: 'DC-BR-047',
    name: 'Diamond Jewellery – Bracelet 24 KT yellow gold',
    desc: 'Diamond Jewellery - Yellow Multi (6.074 gram) with diamonds (0.18 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/02/AFP00151-16A-EFRONT-300x300.jpg',
    category: 'Earrings',
    price: 13384,
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
    name: 'Diamond Jewellery – Ladies Ring 22 KT',
    desc: 'Diamond Jewellery - Yellow Multi (6.074 gram) with diamonds (0.18 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/05/DE-2407.jpg',
    category: 'Earrings',
    price: 62823,
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
    product_code: 'DC-BR-007',
    name: 'DC-BR-007',
    desc: 'Diamond Jewellery - 22Kt Yellow Gold (17.668 gram) with diamonds (1.66 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/06/DC-BR-007_1553250167-300x300.jpg',
    category: 'Gents Ring',
    price: 243485,
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
    product_code: 'DOC5909G',
    name: 'DOC5909G',
    desc: 'Diamond Jewellery - 22Kt Yellow Gold (17.668 gram) with diamonds (1.66 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/01/DOC5909G3_1579447259.jpg',
    category: 'Gents Ring',
    price: 40659,
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
    product_code: 'DOC5911G',
    name: 'DOC5911G',
    desc: 'Diamond Jewellery - 22Kt Yellow Gold (17.668 gram) with diamonds (1.66 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/01/DOC5911G3_1579447655.jpg',
    category: 'Gents Ring',
    price: 47905,
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
    product_code: 'LR-1234',
    name: 'Diamond Jewellery – Ring 18 KT White gold',
    desc: 'Diamond Jewellery - 22Kt Yellow Gold (17.668 gram) with diamonds (1.66 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/01/DNR1619.-D-..P._1575459526.jpg',
    category: 'Ladies Ring',
    price: 28968,
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
    product_code: 'DJR705',
    name: 'Diamond Jewellery – Ring 18 KT White gold',
    desc: 'Diamond Jewellery - 22Kt Yellow Gold (17.668 gram) with diamonds (1.66 cts)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/01/DJR-705..-D-.-P._1575459262.jpg',
    category: 'Ladies Ring',
    price: 10803,
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
    product_code: 'DJR705',
    name: 'Necklace',
    desc: 'Diamond Jewellery - 18Kt Gold (75.5 gram)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/01/6-300x300.jpg',
    category: 'Necklaces',
    price: 369079,
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
    product_code: 'DJR705',
    name: 'Tiara Diamond Jewellery – Bracelet 22 KT',
    desc: 'Gold Jewellery - 22Kt Yellow Gold (49.8 gram)',
    image_url:
      'https://tiarabytj.com/wp-content/uploads/sites/27/2021/03/1615371830359.jpg',
    category: 'Necklaces',
    price: 360500,
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

export class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProduct: {},
    };
    this.onProductPress = this.onProductPress.bind(this);
    this.onChangeSnap = this.onChangeSnap.bind(this);
  }
  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('blur', () => {
      let {params} = this.props.route;
      let {setParams} = this.props.navigation;
      if (params) {
        if (params.filterCategory) {
          setParams({filterCategory: undefined});
        }
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onProductPress(item) {
    this.setState({currentProduct: item}, () => {
      this.onChangeSnap(1);
    });
  }
  onChangeSnap(index) {
    this.sheetRef.snapTo(index);
  }
  render() {
    const {navigation} = this.props;
    const {params} = this.props.route;
    const {currentProduct} = this.state;
    return (
      <Container isPadding={false}>
        <Navbar>
          <MenuIconView onPress={() => navigation.openDrawer()}>
            <MenuIcon />
          </MenuIconView>
          <SearchProduct />
          <Cart style={{marginHorizontal: 8}} />
        </Navbar>
        <TopActionView>
          <SortView>
            <SortButton
              text="Sort"
              textStyle={{
                color: defaultValues.textColor,
                fontSize: 18,
                marginHorizontal: 9,
              }}
              rightIcon={<Sort />}
            />
          </SortView>
          <FilterView>
            <FilterButton
              text="Filter"
              textStyle={{
                color: defaultValues.textColor,
                fontSize: 18,
                marginHorizontal: 7,
              }}
              rightIcon={<Filter />}
            />
          </FilterView>
        </TopActionView>
        {params && params.filterCategory !== undefined && (
          <Text
            style={{
              fontSize: 20,
              color: defaultValues.textColor,
              marginLeft: 15,
              marginVertical: 10,
            }}>
            Category: "{params.filterCategory}"
          </Text>
        )}
        <FlatList
          data={
            params && params.filterCategory !== undefined
              ? products_data.filter(
                  item => item.category === params.filterCategory,
                )
              : products_data
          }
          keyExtractor={i => i.name}
          style={{paddingVertical: 15}}
          numColumns={2}
          renderItem={({item}) => (
            <ProductCard
              item={item}
              width={width / 2}
              onProductPress={this.onProductPress}
            />
          )}
          ListFooterComponent={<View style={{height: 30}} />}
        />
        {/* <BottomSheet
          ref={ref => (this.sheetRef = ref)}
          index={0}
          snapPoints={['0%', '60%']}
          onChange={i => console.log(i)}>
          <BottomSheetScrollView>
            <Image
              source={{uri: currentProduct.uri}}
              style={{
                width: width * 0.7,
                height: width * 0.7,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <View style={{marginVertical: 10}}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{fontSize: 16, marginLeft: 10}}>
                {currentProduct.name}
              </Text>
              <Price>₹{currentProduct.price}</Price>
            </View>
            <Text style={{fontSize: 17}}>{currentProduct.desc}</Text>
          </BottomSheetScrollView>
        </BottomSheet> */}
      </Container>
    );
  }
}

export default Shop;

const Navbar = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 5px;
`;
const MenuIconView = styled.TouchableOpacity`
  margin-right: 10px;
  margin-left: 5px;
`;
const TopActionView = styled.View`
  flex-direction: row;
  margin: 10px 8px;
`;
const SortView = styled.View`
  border: 0.5px solid #fff;
  border-top-left-radius: 10px;
  flex: 1;
  border-bottom-left-radius: 10px;
`;
//   border-right-width: 0px;
const SortButton = styled(CustomButton)`
  align-items: center;
  margin: 0px auto;
  padding: 7px 0px;
`;
const FilterView = styled(SortView)`
  border-left-width: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const FilterButton = styled(SortButton)``;

const Price = styled.Text`
  margin-left: 10px;
  font-size: 16px;
`;
