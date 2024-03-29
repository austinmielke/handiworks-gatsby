require('dotenv').config({
  path: '.env'
})

module.exports = {
  siteMetadata: {
    title: 'Handiworks Ltd.',
    description: 'Starting in 1984 Handiworks Ltd. began as a craft business doing antique reproduction needle arts. Ventures included various regional craft shows always focused on fiber arts in one form or another. Currently Handiworks focuses on knitting and crochet pattern designs.',
    author: 'Austin Mielke'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        // eslint-disable-next-line node/no-path-concat
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          precision: 6
        }
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
        token: process.env.SANITY_TOKEN
      }
    },
    // {
    //   resolve: 'gatsby-plugin-purgecss',
    //   options: {
    //     printRejected: true // Print removed selectors and processed file names
    //   }
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-bootstrap-5',
        short_name: 'gb5-starter',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#4D3216',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-gatsby-cloud'
  ]
}
