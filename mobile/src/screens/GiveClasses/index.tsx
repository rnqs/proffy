import React from 'react'
import { View, ImageBackground, Text, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='contain'
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
      </ImageBackground>
      <RectButton
        onPress={() => goBack()}
        style={styles.backButton}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </RectButton>
      <RectButton
        onPress={() => Linking.openURL('https://proffy-nlw2.netlify.app/dar-aula')}
        style={styles.okButton}
      >
        <Text style={styles.buttonText}>Ir para a plataforma web</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses