/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import '../components/patterns.scss'
import PatternCard from '../components/patterncard'

const PatternsList = ({ data }) => {
  const patterns = data.patterns.edges
  return (
        <Layout>
            <Seo title="Patterns" />
            <section className="container" id="patterns-list">
                <div className="row">
                    {patterns.map((pattern) => <PatternCard pattern={pattern.node} key={pattern.node._id} />)}
                </div>
            </section>
        </Layout>
  )
}

export const query = graphql`
    query {
        patterns: allSanityPattern {
            edges {
                node {
                    name
                    publishDate
                    slug {
                        current
                    }
                    image {
                        asset {
                            gatsbyImageData(
                                height: 200
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                    _id
                }
            }
        }
    }
`

export default PatternsList
