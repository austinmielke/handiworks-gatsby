import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import bannerImage from '../images/banner.svg'

import './navbar.scss'

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'nav-link active' } : { className: 'nav-link' }
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <header className="container p-0 mb-4">
        <div className="row banner my-3">
            <div className="col-lg-12">
            <img className="img-fluid text-center" src={bannerImage} alt="Handicrafts Ltd." />
                {/* <img className="img-fluid text-center" src="/img/banner.svg" alt="Handicrafts Ltd." /> */}
            </div>
        </div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-light" id="navbar">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <ExactNavLink to="/">Home</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/patterns">Patterns</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/about">About</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/contact">Contact</ExactNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string
}

Navbar.defaultProps = {
  siteTitle: ''
}

export default Navbar
