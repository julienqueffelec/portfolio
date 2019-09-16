import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Header from '../components/Header'
import Description from '../components/Description'
import Languages from '../components/Languages'
import Head from '../components/Head'
import Projects from '../components/Projects'
import '../styles/index.css'

const Wrapper = styled.div`
  padding: 0 50px;
  margin: 0 auto;
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
          server
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
        <Languages
          languages={data.site.siteMetadata.languages}
          libraries={data.site.siteMetadata.libraries}
          server={data.site.siteMetadata.server}
        />
        <Projects />
      </Wrapper>
    </div>
  )
}
export default IndexPage
