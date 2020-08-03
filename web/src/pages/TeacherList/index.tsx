import React from 'react'

import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list">
      <Header title='Esses são os proffys disponíveis.'>
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="subject" />
          </div>
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