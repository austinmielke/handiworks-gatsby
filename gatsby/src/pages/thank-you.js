import React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const ThankYouPage = () => (
    <Layout>
        <Seo title="Thank You!" />
        <section className="container text-center">
            <h1>Thank you!</h1>
            <p>Your message has been sent!</p>
            <Link to="/" className="btn btn-primary">Return to Home Page</Link>
        </section>
    </Layout>
)

export default ThankYouPage
