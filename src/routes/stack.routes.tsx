import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home';
import CarDetails from '../Screens/carDetails';
import Scheduling from '../Screens/scheduling';
import SchedulingDetails from '../Screens/schedulingDetails';
import SchedulingConcluid from '../Screens/schedulingConcluid';

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
            <Screen
                name='Scheduling'
                component={Scheduling}
            />
            <Screen
                name='SchedulingDetails'
                component={SchedulingDetails}
            />
            <Screen
                name='SchedulingConcluid'
                component={SchedulingConcluid}
            />

        </Navigator>
    )
}