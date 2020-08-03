import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/51209886?s=460&u=46e29e49b022576e33ac8d515d4062ac507a7d38&v=4" alt="Renan Arques" />
        <div>
          <strong>Renan Arques</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />
        Apaixonado por explodir coisas em laboratório e por mudar a vidas as pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem