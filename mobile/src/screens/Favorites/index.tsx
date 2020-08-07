import React, { useState } from 'react'

import { View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Title from '../../components/Title'

import styles from './styles'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  const loadFavorites = () => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const isFavoriteTeachers = JSON.parse(response)

        setFavorites(isFavoriteTeachers)
      }
    })
  }

  useFocusEffect(() => loadFavorites())

  return (
    <ScrollView style={styles.container}>
      <Title title="Meus proffys disponíveis" />

      <View style={styles.teachersContainer}>
        <View style={styles.teachers}>
          {
            favorites.map((teacher: Teacher) => {
              return (
                <View key={teacher.id} style={styles.teacherItemContainer}>
                  <TeacherItem
                    key={teacher.id}
                    teacher={teacher}
                    favorite
                  />
                </View>
              )
            })
          }
        </View>
      </View>
    </ScrollView>
  )
}

export default Favorites