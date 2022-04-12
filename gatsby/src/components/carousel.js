/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './carousel.scss'

const Carousel = ({ carouselItems }) => {
  return (
    <section className="container">
        <div className="row justify-content-center">
            <h1 className="carousel-title">Featured Patterns</h1>
            <div className="col-md-10">
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-hover="false">
                <div className="carousel-indicators">
                    {carouselItems.map((carouselItem, index) => (
                          <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : ''}
                            aria-label={`Slide ${index++}`}
                            key={carouselItem._id}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {carouselItems.map((carouselItem, index) => {
                      const image = getImage(carouselItem.image.asset)
                      return (
                        <div
                            key={carouselItem._id}
                            className={`carousel-item ${index === 0 ? ' active' : ''}`}
                        >
                            <GatsbyImage
                                image={image}
                                className="d-block w-100"
                                alt={`Picture of ${carouselItem.name} by Judy M. Ellis, Handiwords Ltd LLC`}
                            />
                            <div className="carousel-caption">
                                <h5>
                                    <Link to={`/patterns/${carouselItem.slug.current}`}>
                                        {carouselItem.name}
                                    </Link>
                                </h5>
                            </div>
                        </div>
                      )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Carousel
