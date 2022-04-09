import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../components/contact.scss'
import { FaRavelry as RavelryIcon } from 'react-icons/fa'
import { AiFillFacebook as FacebookIcon } from 'react-icons/ai'
import { BsTwitter as TwitterIcon, BsInstagram as InstagramIcon } from 'react-icons/bs'

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <section className="container" id="contact">
        <div className="row">

            <div className="col-sm-12 col-md-8">
                <h1 className="text-center">Contact</h1>
                <form className="mb-4" action="" method="POST">

                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value="" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" name="email" id="email" value="" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" name="subject" id="subject" value="" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="body">Message:</label>
                        <textarea name="bodyMessage" id="bodyMessage" rows="5" className="form-control" />
                    </div>

                    <button className="btn btn-success">Send Message</button>

                </form>
            </div>

            <div className="col">
                <ul>
                    <li>
                        <a className="text-decoration-none" href="http://www.ravelry.com/designers/handiworks-ltd" target="_blank" rel="noreferrer">
                            <RavelryIcon /> Ravelry
                        </a>
                    </li>
                    <li>
                        <a className="text-decoration-none" href="https://www.facebook.com/Handiworks-Ltd-394179337378519/" target="_blank" rel="noreferrer">
                            <FacebookIcon /> Facebook
                        </a>
                    </li>
                    <li>
                        <a className="text-decoration-none" href="https://twitter.com/HandiworksLtd?lang=en" target="_blank" rel="noreferrer">
                            <TwitterIcon /> Twitter
                        </a>
                    </li>
                    <li>
                        <a className="text-decoration-none" href="https://www.instagram.com/handiworksltd/" target="_blank" rel="noreferrer">
                            <InstagramIcon /> Instagram
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </section>
  </Layout>
)

export default ContactPage
