import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import Movie from '../pages/Movie/Movie';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: '300',
            },
            headerBackTitleVisible: false,
            headerTitle: 'Home Page',
          }}
        />
        <Stack.Screen
          name="MoviePage"
          component={Movie}
          options={{
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: '300',
            },
            headerBackTitleVisible: false,
            headerTitle: 'Movie Page',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
