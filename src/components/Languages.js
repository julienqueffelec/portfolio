import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  color: #000;
  font-size: 60px;
  line-height: 45px;
`

const Languages = ({ languages, libraries, server }) => {
  return (
    <div>
      <Title>Langages de programmation</Title>
      <ul>
        <li>Langages : {languages}</li>
        <li>Librairies : {libraries}</li>
        <li>Serveur : {server}</li>
      </ul>
    </div>
  )
}

export default Languages
