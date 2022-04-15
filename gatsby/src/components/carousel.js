/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.scss'

const IndexCarousel = ({ carouselItems }) => {
  return (
    <section className="container">
        <div className="row justify-content-center">
            <h1 className="carousel-title">Featured Patterns</h1>
            <div className="col-md-10">
            <Carousel fade>
            {carouselItems.map((carouselItem, index) => {
              const image = getImage(carouselItem.image.asset)
              return (
                <Carousel.Item key={carouselItem._id} >
                    <GatsbyImage
                        image={image}
                        className="d-block w-100"
                        alt={`Picture of ${carouselItem.name} by Judy M. Ellis, Handiwords Ltd LLC`}
                    />
                    <Carousel.Caption>
                        <h5>
                            <Link to={`/patterns/${carouselItem.slug.current}`}>
                                {carouselItem.name}
                            </Link>
                        </h5>
                    </Carousel.Caption>
                </Carousel.Item>
              )
            })}
            </Carousel>
            </div>
        </div>
    </section>
  )
}

export default IndexCarousel
