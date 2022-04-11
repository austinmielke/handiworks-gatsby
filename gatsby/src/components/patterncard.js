/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PatternCard = ({ pattern }) => {
  const image = getImage(pattern.image.asset)
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="card text-center">
            <div className="image">
                <Link to={`/patterns/${pattern.slug.current}`}>
                    <GatsbyImage image={image} alt={`Picture of ${pattern.name} by Judy M. Ellis, Handiwords Ltd LLC`} />
                </Link>
            </div>
            <div className="card-block">
                <h4 className="card-title">{pattern.name}</h4>
                <Link to={`/patterns/${pattern.slug.current}`} className="btn btn-primary">More Info</Link>
            </div>
        </div>
    </div>
  )
}

export default PatternCard
