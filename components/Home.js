import React from 'react'
import List from './List'
import Deleted from './Deleted'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Home(props) {
    const Tab = createBottomTabNavigator();
    const user = props.route.params;
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
                            else{
                                icon="ios-lock-open-sharp";
                            }
                            return <Ionicons name={icon} size={size} color={color} />;
                        }
                })}
                
            >
                <Tab.Screen options={{headerShown:false}} name='To Do' component={List} initialParams={user}></Tab.Screen>
                <Tab.Screen options={{headerShown:false}} name='Deleted' component={Deleted} initialParams={user}></Tab.Screen>
            </Tab.Navigator>
    )
}
