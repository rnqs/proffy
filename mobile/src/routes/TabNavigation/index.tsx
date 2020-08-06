import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Favorites from '../../screens/Favorites'
import TeacherList from '../../screens/TeacherList'

const { Navigator, Screen } = createBottomTabNavigator()

import styles from './styles'

const TabNavigation = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: styles.style,
        tabStyle: styles.tabStyle,
        safeAreaInsets: styles.safeAreaInsets,
        iconStyle: styles.iconStyle,
        labelStyle: styles.labelStyle,
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name='Proffys'
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={
                  focused
                    ? '#8257e5'
                    : color
                }
              />
            )
          }
        }}
      />
      <Screen
        name='Favoritos'
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={
                  focused
                    ? '#8257e5'
                    : color
                }
              />
            )
          }
        }}
      />
    </Navigator>
  )
}

export default TabNavigation