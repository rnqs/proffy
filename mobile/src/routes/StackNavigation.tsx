import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Header from '../components/Header'

import Landing from '../screens/Landing'
import GiveClasses from '../screens/GiveClasses'

import TabNavigation from './TabNavigation'

const { Navigator, Screen } = createStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ header: () => <Header /> }}>
        <Screen options={{ headerShown: false }} name='Landing' component={Landing} />
        <Screen options={{ headerShown: false }} name='GiveClasses' component={GiveClasses} />
        <Screen name='Study' component={TabNavigation} />
      </Navigator>
    </NavigationContainer >
  )
}

export default StackNavigator