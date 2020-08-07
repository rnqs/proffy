import React, { useState } from 'react'

import { View, ScrollView, Text, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api'

import Title from '../../components/Title'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  const [subject, setSubject] = useState('Geografia')
  const [week_day, setWeekDay] = useState('1')
  const [time, setTime] = useState('9:00')

  const loadFavorites = () => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const isFavoriteTeachers = JSON.parse(response)
        const isFavoriteTeachersIds = isFavoriteTeachers.map((teacher: Teacher) => {
          return teacher.id
        })

        setFavorites(isFavoriteTeachersIds)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  const handleToggleFiltersVisible = () => {
    setIsFiltersVisible(!isFiltersVisible)
  }

  const handleFiltersSubmit = async () => {
    loadFavorites()

    const response = await api.get('classes', {
      params: {
        subject, week_day, time,
      },
    })

    setIsFiltersVisible(false)
    setTeachers(response.data)
  }

  return (
    <ScrollView style={styles.container}>
      <Title
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton
            onPress={handleToggleFiltersVisible}
          >
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </Title>

      <View style={styles.teachersContainer}>
        <View style={styles.teachers}>
          {
            teachers.map((teacher: Teacher) => {
              return (
                <View key={teacher.id} style={styles.teacherItemContainer}>
                  <TeacherItem
                    key={teacher.id}
                    teacher={teacher}
                    favorite={favorites.includes(teacher.id)}
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

export default TeacherList