import React from 'react'

import Input from '../../components/Input'
import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list">
      <Header title='Esses são os proffys disponíveis.'>
        <form id="search-teachers">
          <Input name="subject" label="Matérias" />
          <Input name="week-day" label="Dia da semana" />
          <Input name="time" type="time" label="Hora" />
        </form>
      </Header>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList