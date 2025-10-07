import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from './pages/Hompage';
import Registerpage from './pages/registerpage';
import Reviewpage from './pages/reviewpage';
import UserListPage from './pages/userlistpage';

const Stack=createNativeStackNavigator();

export default function Dashboard(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Homepage}/>
                <Stack.Screen name="Register" component={Registerpage}/>
                <Stack.Screen name="Review" component={Reviewpage}/>
                <Stack.Screen name="UserList" component={UserListPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}