import React from 'react'

import { Text, ScrollView, View } from 'react-native'

import styles from './styles'

const Favorites: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.test} />
    </ScrollView>
  );
}

export default Favorites