import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Header from '../components/Header'
import Description from '../components/Description'
import Head from '../components/Head'
import Projects from '../components/Projects'
import '../styles/index.css'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  @media (max-width: 720px) {
    width: 100%;
    margin: 0 px;
  }
`
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          city
          job
          languages
          libraries
          email
        }
      }
    }
  `)
  return (
    <div>
      <Head title="Julien Queffelec" />
      <Header></Header>
      <Description email={data.site.siteMetadata.email} />
      <Wrapper>
        <Projects />
      </Wrapper>
    </div>
  )
}
export default IndexPage
