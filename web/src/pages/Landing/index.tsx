import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import logoImage from '../../assets/images/logo.svg'
import landingImage from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import api from '../../services/api'

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  const getTotalConnections = async () => {
    const response = await api.get('/connections')

    setTotalConnections(response.data.total)
  }

  useEffect(() => {
    getTotalConnections()
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImage} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImage} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/estudar" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/dar-aula" className="give-classes">
            <img src={giveClasses} alt="Estudar" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing;