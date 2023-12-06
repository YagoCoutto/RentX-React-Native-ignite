import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home';
import CarDetails from '../Screens/carDetails';

const { Screen, Navigator } = createNativeStackNavigator()

export default function StackRouters() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='Home'
                component={Home}
            />
            <Screen
                name='CarDetails'
                component={CarDetails}
            />
        </Navigator>
    )
}