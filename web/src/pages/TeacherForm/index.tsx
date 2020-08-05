import React from 'react'

import Input from '../../components/Input'
import Header from '../../components/Header'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Metéria" />
          <Input name="cost" label="Custo por hora de aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="submit">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm