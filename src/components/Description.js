import React from 'react'
import styled from 'styled-components'
import MailIcon from '../images/icon-mail.svg'
import LinkedinIcon from '../images/icon-linkedin.svg'

const StyledDescription = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  svg {
    vertical-align: middle;
  }
  ul {
    padding: 0;
    @media (max-width: 720px) {
      margin: 5px 10px;
    }
  }
  li {
    list-style: none;
  }
  a {
    color: #000;
    margin-left: 5px;
  }
  @media (max-width: 720px) {
    width: 100%;
    box-sizing: border-box;
  }
`

const Description = ({ email }) => {
  return (
    <StyledDescription>
      <ul>
        <li>
          <MailIcon />
          <a href={`mailto: ${email}`}>Contact</a>
        </li>
        <li>
          <LinkedinIcon />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/julienqueffelec"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </StyledDescription>
  )
}

export default Description
