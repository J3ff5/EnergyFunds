import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Home from 'pages/Home';
import {styles} from './styles';
import {Provider} from 'react-redux';
import store from './redux/store';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}
