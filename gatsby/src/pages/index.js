/* eslint-disable react/prop-types */
import * as React from 'react'
import 'bootstrap/js/dist/carousel.js'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Carousel from '../components/carousel'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const { carouselItems } = data.sanitySiteSettings
  return (
    <Layout>
      <Seo title="Home" />
      <Carousel carouselItems={carouselItems} />
      <section className="container mb-4">
          <div className="row justify-content-center">
              <div className="col-md-10">
                  <p className="lead">Starting in 1984 Handiworks Ltd. began as a craft business doing antique reproduction needle arts. Ventures included
                      various regional craft shows always focused on fiber arts in one form or another. Currently Handiworks
                      focuses on knitting and crochet pattern designs.</p>
              </div>
          </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    sanitySiteSettings {
      carouselItems {
        _id
        name
        image {
          asset {
            gatsbyImageData(
              height: 350
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        slug {
          current
        }
      }
    }
  }
`

export default IndexPage
