import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Layout from './Layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Title = styled.h2`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  color: #000;
  font-size: 60px;
  line-height: 5px;
  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const Projet = styled.li`
  list-style: none;
`

const Projects = ({ img, name }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(
        sort: { fields: order, order: ASC }
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            title
            slug
            order
            body {
              json
            }
          }
        }
      }
    }
  `)

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Title>Projets</Title>
      <ol>
        {data.allContentfulProjects.edges.map(edge => {
          return (
            <div>
              <Projet key={edge.node.order}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
                {documentToReactComponents(edge.node.body.json, options)}
              </Projet>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Projects
