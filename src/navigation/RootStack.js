import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from 'pages';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

export class RootStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="TabNavigation"
          component={TabNavigation}
        />
      </Stack.Navigator>
    );
  }
}

export default RootStack;
