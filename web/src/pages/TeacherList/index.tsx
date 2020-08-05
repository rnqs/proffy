import React from 'react'

import Input from '../../components/Input'
import Select from '../../components/Select'
import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list">
      <Header title='Esses são os proffys disponíveis.'>
        <form id="search-teachers">
          <Select
            name="subject"
            label="Metéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Espanhol', label: 'Espanhol' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Língua Portuguesa', label: 'Língua Portuguesa' },
              { value: 'Literatura', label: 'Literatura' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Química', label: 'Química' },
              { value: 'Sociologia', label: 'Sociologia' }
            ]}
          />
          <Select
            name="week-day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
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