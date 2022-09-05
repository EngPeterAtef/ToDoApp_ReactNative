import React from 'react'
import List from './List'
import Deleted from './Deleted'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Home(props) {
    const Tab = createBottomTabNavigator();
    const userName = props.route.params.userName;
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({//taking the route of
                    tabBarIcon:
                        ({ focused, size, color }) => {
                            //focued is a flag to know the screen is opened
                            //size is the size of the icon
                            //color is the color of the icon
                            var icon = '';//icon name in the library
                            //decide the size and the color depends 
                            size = focused ? 30 : 24;
                            color = focused ? "#1BFFFF" : 'grey';
                            if (route.name == 'Deleted') {
                                icon = 'trash';
                            }
                            else if (route.name == 'To Do') {
                                icon = 'book';
                            }
                            return <Ionicons name={icon} size={size} color={color} />;
                        }
                })}
                
            >
                <Tab.Screen options={{headerShown:false}} name='To Do' component={List} initialParams={{uName:userName}}></Tab.Screen>
                <Tab.Screen options={{headerShown:false}} name='Deleted' component={Deleted} initialParams={{uName:userName}}></Tab.Screen>
            </Tab.Navigator>
    )
}
