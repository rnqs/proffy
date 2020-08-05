import React, { useState, FormEvent } from 'react'

import api from '../../services/api'

import Input from '../../components/Input'
import Select from '../../components/Select'
import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'

import searchIcon from '../../assets/images/icons/search.svg'

import './styles.css'

interface Proffy {
  id: number
  bio: string
  name: string
  cost: number
  avatar: string
  subject: string
  whatsapp: string
}

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  const [proffys, setProffys] = useState([])

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault()

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setProffys(response.data)
  }

  return (
    <div id="page-teacher-list">
      <Header title='Esses são os proffys disponíveis.'>
        <form id="search-teachers" onSubmit={searchTeachers}>
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
            value={subject}
            onChange={e => setSubject(e.target.value)}
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
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
          />
          <Input
            name="time"
            type="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">
            <img src={searchIcon} alt="Buscar" />
          </button>
        </form>
      </Header>

      <main>
        {
          proffys.map(((proffy: Proffy) => <TeacherItem key={proffy.id} teacher={proffy} />))
        }
      </main>
    </div>
  )
}

export default TeacherList