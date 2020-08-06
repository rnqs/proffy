import React from 'react'

import { Text, ScrollView, View } from 'react-native'

import styles from './styles'

const TeacherList: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Quer ser um Proffy?</Text>
      <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
      <View style={styles.test} />
    </ScrollView>
  );
}

export default TeacherList