import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../components/patterns.scss'

const PatternsList = () => (
  <Layout>
    <Seo title="Home" />
    <section className="container" id="patterns-list">

            <div className="row">

                {/* Start of card loop */}

                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card text-center">
                            <div className="image">
                                <a href="/patterns/">
                                    <img src="" alt=" by Judy M. Ellis, Handiwords Ltd LLC" />
                                </a>
                            </div>
                            <div className="card-block">
                                <h4 className="card-title">Pattern Name</h4>
                                <a href="" className="btn btn-primary">More Info</a>
                            </div>
                        </div>
                    </div>

                {/* End of card loop */}

            </div>

        </section>
  </Layout>
)

export default PatternsList
