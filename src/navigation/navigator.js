import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;