import React from 'react'
import styled from 'styled-components'
import MailIcon from '../images/icon-mail.svg'
import LinkedinIcon from '../images/icon-linkedin.svg'

const StyledDescription = styled.div`
  svg {
    vertical-align: middle;
  }
  li {
    list-style: none;
  }
  a {
    color: #000;
    margin-left: 5px;
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
