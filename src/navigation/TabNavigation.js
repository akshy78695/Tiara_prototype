import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home as HomeSvg, Profile, Shop as ShopSvg} from '../assets/Svg';
import {Shop, Home} from 'pages';

const Tab = createBottomTabNavigator();

function AccountScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Comming soon!</Text>
    </View>
  );
}

export class TabNavigation extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Text>Hello</Text> */}
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {backgroundColor: '#000', borderTopWidth: 0},
            tabBarActiveTintColor: '#fff',
          }}>
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <HomeSvg fillColor={focused ? '#fff' : 'grey'} />
              ),
            }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <ShopSvg fillColor={focused ? '#fff' : 'grey'} />
              ),
            }}
            name="Shop"
            component={Shop}
          />

          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Profile fillColor={focused ? '#fff' : 'grey'} />
              ),
            }}
            name="Account"
            component={AccountScreen}
          />
        </Tab.Navigator>
      </React.Fragment>
    );
  }
}

export default TabNavigation;
