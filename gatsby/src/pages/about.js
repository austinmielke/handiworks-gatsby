/* eslint-disable react/prop-types */
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../components/about.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const AboutPage = ({ data }) => {
  const portrait = getImage(data.file.childImageSharp)
  return (
    <Layout>
        <Seo title="About" />
        <section className="container" id="about">
            <div className="row">
                <div className="col text-center">
                    <GatsbyImage className="image-fluid mb-4 mx-auto" image={portrait} alt="Photo of Judy M. Ellis" />
                </div>
                <div className="col-sm-8">

                    <h1 className="text-center">About</h1>
                    <p>Starting in 1984 Handiworks Ltd. began as a craft business doing antique reproduction needle arts. Ventures included various regional craft shows always focused on fiber arts in one form or another. Currently Handiworks focuses on knitting and crochet pattern designs.</p>

                    <p>Judy Ellis is a lifelong knitter and crocheter. She was literally taught at the knee of both of her grandmothers who never used written patterns.</p>

                    <h3 className="text-center">Services Offered</h3>

                    <div className="container">
                        <div className="row justify-content-around">

                            <div className="card col-lg-5">
                                <div className="card-body">
                                    <h4 className="text-center card-title">
                                        <Link to="/contact" className="card-link text-decoration-none" state={{ subject: 'design' }}>Knit or Crochet Design</Link>
                                    </h4>
                                    <p className="card-text">Judy works with yarn manufactures and companies to create elegant garments and designs.</p>
                                </div>
                            </div>

                            <div className="card col-lg-5">
                                <div className="card-body">
                                    <h4 className="text-center card-title">
                                        <Link to="/contact" className="card-link text-decoration-none" state={{ subject: 'teaching' }}>Teaching</Link>
                                    </h4>
                                    <p className="card-text">Judy will create a single session or series of knit or crochet classes for presentation to individuals or groups. Examples of classes include: beginning knit or crochet, reading charts, lace, fair isle, colorwork, socks, etc.</p>
                                </div>
                            </div>

                            <div className="card col-lg-5">
                                <div className="card-body">
                                    <h4 className="text-center card-title">
                                        <Link to="/contact" className="card-link text-decoration-none" state={{ subject: 'sample' }}>Sample Knit or Crochet</Link>
                                    </h4>
                                    <p className="card-text">Knit or crochet a sample of your design. Need an additional piece to send with a trunk show? Or an item test knit or crocheted before the pattern is release? Designers can hire Judy to knit or crochet a sample of your design.</p>
                                </div>
                            </div>

                            <div className="card col-lg-5">
                                <div className="card-body">
                                    <h4 className="text-center card-title">
                                        <Link to="/contact" className="card-link text-decoration-none" state={{ subject: 'custom' }}>Custom Knit or Crochet</Link>
                                    </h4>
                                    <p className="card-text">Have a design you&apos;d like made, but don&apos;t have the time? Judy will work with you to determin yarn, labor costs and timelines.</p>
                                </div>
                            </div>

                            <div className="card col-lg-5">
                                <div className="card-body">
                                    <h4 className="text-center card-title">
                                        <Link to="/contact" className="card-link text-decoration-none" state={{ subject: 'editing' }}>Tech and Copy Editing</Link>
                                    </h4>
                                    <p className="card-text">Ensure your pattern is ready for publishing by having Judy as a second set of eyes to proofread, tech and copy edit, as well as checking the numbers to make sure they work.</p>
                                </div>
                            </div>

                            <div className="card col-lg-5">
                                <div className="card-body">
                                    <h4 className="text-center card-title">
                                        <Link to="/contact" className="card-link text-decoration-none" state={{ subject: 'repair' }}>Repair Knit or Crocheted Items</Link>
                                    </h4>
                                    <p className="card-text">Have an item that has a hole or is a bit worn out? Judy has the skills to repair it for you.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
query {
  file(relativePath: {eq: "portrait.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        width: 350
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
}

`

export default AboutPage
