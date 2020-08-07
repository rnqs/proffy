import React from 'react'
import { View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import SafeAreaView from 'react-native-safe-area-view'

import backIcon from '../../assets/images/icons/back.png'
import logoImage from '../../assets/images/logo.png'

import styles from './styles'

const Header: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <BorderlessButton onPress={() => navigate('Landing')}>
        <Image source={backIcon} resizeMode="contain" />
      </BorderlessButton>

      <Image source={logoImage} resizeMode="contain" />
    </SafeAreaView>
  )
}

export default Header