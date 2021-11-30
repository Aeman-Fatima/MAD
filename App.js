import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from './app/consts/colors';
import DetailsScreen from './app/views/screens/DetailsScreen';
import BottomNavigator from './app/views/navigation/BottomNavigator';
import OnBoardScreen from './app/views/screens/OnBoardScreen';
import CategoryScreen from './app/views/screens/Category';
import LogInScreen from './app/views/screens/Login';
import SignUpScreen from './app/views/screens/SignUp';
import VerifyScreen from './app/views/screens/Verify';
import OnGoing from './app/views/screens/OnGoing';
import OrderHistory from './app/views/screens/OrderHistory';



const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="OnGoing" component={OnGoing} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
