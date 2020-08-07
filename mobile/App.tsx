require('react-native').unstable_enableLogBox()

import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import StackNavigator from './src/routes/StackNavigation'

const App = () => {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="inverted" />
      <StackNavigator />
    </SafeAreaProvider>
  )
}

export default App