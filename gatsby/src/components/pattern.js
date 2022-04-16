/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, Link } from 'gatsby'
import { FaRavelry as RavelryIcon } from 'react-icons/fa'
import Layout from './layout'
import Seo from './seo'
import './pattern.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PatternPage = ({ data }) => {
  const pattern = data.pattern
  const image = getImage(pattern.image.asset)
  return (
    <Layout>
        <Seo title={pattern.name} />
        <section className="container" id="pattern">

            <div className="row">
                <div className="col">
                    <ol className="breadcrumb">
                            <Link to="/patterns/" className="breadcrumb-item">Patterns</Link>
                            <Link to={`/patterns/${pattern.slug.current}`} className="breadcrumb-item active">{pattern.name}</Link>
                    </ol>
                </div>
            </div>

            <div className="row">

                <div className="col image">
                    <GatsbyImage image={image} alt={`${pattern.name} by Judy M. Ellis, Handiworks Ltd LLC`} className="img img-fluid" />
                </div>

                <div className="col-sm-8 description">

                    <h1>{pattern.name}</h1>

                    <p>{pattern.description}</p>

                    <div className="d-flex justify-content-center">
                        {pattern.url &&
                            <a href={pattern.url} target="_blank" className="btn btn-primary m-1" rel="noreferrer">
                                <RavelryIcon /> Ravelry
                            </a>
                        }
                        <Link to="/patterns/" className="btn btn-primary m-1">Return to Patterns</Link>
                    </div>

                </div>

            </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        pattern: sanityPattern(slug: {current: {eq: $slug}}) {
            _id
            image {
                asset {
                    gatsbyImageData(width: 350)
                }
            }
            name
            publishDate
            slug {
                current
            }
            description
            url
        }
    }

`

export default PatternPage
