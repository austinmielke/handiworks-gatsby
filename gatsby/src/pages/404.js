import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../components/404.scss'

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page Not Found" />
    <section className="container text-center">
      <h1>Page Not Found</h1>
      <p>The page you were looking for could not be found or does not exist.</p>
      <Link to="/" className="btn btn-primary">Return to Home Page</Link>
    </section>

  </Layout>
)

export default NotFoundPage
