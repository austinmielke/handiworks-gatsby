import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import 'bootstrap/js/dist/carousel.js'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
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

export default IndexPage
