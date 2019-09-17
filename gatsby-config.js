const path = require('path')
module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    author: 'Julien Queffelec',
    email: 'julienqueffelec@me.com',
    city: 'Quimper',
    job: 'Armor-Lux',
    languages: 'JavaScript, PHP, GraphQL, HTML, CSS',
    libraries: 'React, Gatsby, jQuery',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.ico',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}
