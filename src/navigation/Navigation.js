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
          name="Home Page"
          component={Home}
          
          options={{
            headerTitle: 'Home Page',
            headerTitleAlign: 'left',
            headerTitleAlign: 'center',
            headerShown: false,
            headerTintColor: '#202020',
            headerTitleStyle: {
              fontWeight: '300',
            },
            headerBackTitleVisible: false,
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
            headerShown: false,
            headerBackTitleVisible: false,
            headerTitle: 'Movie Page',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
