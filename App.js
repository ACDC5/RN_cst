/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import CheckOut_WT from './src/pagas/CheckOut_WT';

const Stack = createStackNavigator();
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name="CheckOut_WT" component={CheckOut_WT} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
