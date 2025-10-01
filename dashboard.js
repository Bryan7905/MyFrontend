import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from './pages/Hompage';
import Registerpage from './pages/registerpage';
import Reviewpage from './pages/reviewpage';

const Stack=createNativeStackNavigator();

export default function Dashboard(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Homepage}/>
                <Stack.Screen name="Register" component={Registerpage}/>
                <Stack.Screen name="Review" component={Reviewpage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}