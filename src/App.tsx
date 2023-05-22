import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from 'pages/Login';
import {styles} from './styles';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
