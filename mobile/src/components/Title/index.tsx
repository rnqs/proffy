import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

interface TitleProps {
  title: string
  headerRight?: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ title, headerRight, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  )
}

export default Title