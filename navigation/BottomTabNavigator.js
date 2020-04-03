import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import TwoScreen from './TwoScreen';
import ThreeScreen from './ThreeScreen';
import Login from './Login';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE = 'Home';

export default class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, route} = this.props;
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
    return (
      <BottomTab.Navigator initialRouteName={INITIAL_ROUTE}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '首页',
          }}
        />

        <BottomTab.Screen
          name="Login"
          component={Login}
          options={{
            title: '这还要说?',
          }}
        />

        <BottomTab.Screen
          name="Anything"
          component={TwoScreen}
          options={{
            title: 'anything',
          }}
        />

        <BottomTab.Screen
          name="测试"
          component={ThreeScreen}
          options={{
            title: '测试',
          }}
        />
      </BottomTab.Navigator>
    );
  }
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE;

  switch (routeName) {
    case 'Home':
      return '首页';
    case 'Anything':
      return 'any';
    case '测试':
      return '测试';
    case 'Mine':
      return '个人中心';
  }
}
