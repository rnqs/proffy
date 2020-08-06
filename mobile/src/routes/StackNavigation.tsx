import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../screens/Landing'
import GiveClasses from '../screens/GiveClasses'

import TabNavigation from './TabNavigation'

import colors from '../assets/colors'

const { Navigator, Screen } = createStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerTitleStyle: { display: 'none' },
        headerStyle: {
          backgroundColor: colors.primary,
          shadowColor: colors.primary,
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 0
        },
      }}>
        <Screen options={{ headerShown: false }} name='Landing' component={Landing} />
        <Screen options={{ headerShown: false }} name='GiveClasses' component={GiveClasses} />
        <Screen name='Study' component={TabNavigation} />
      </Navigator>
    </NavigationContainer >
  )
}

export default StackNavigator