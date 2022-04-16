/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../components/contact.scss'
import { FaRavelry as RavelryIcon } from 'react-icons/fa'
import { AiFillFacebook as FacebookIcon } from 'react-icons/ai'
import { BsTwitter as TwitterIcon, BsInstagram as InstagramIcon } from 'react-icons/bs'

const ContactPage = ({ location }) => {
  const getSubject = (stateSubject) => {
    if (stateSubject !== null) {
      switch (stateSubject) {
        case 'design':
          return 'Inquiry: Knit or Crochet Design'
        case 'teaching':
          return 'Inquiry: Teaching'
        case 'sample':
          return 'Inquiry: Sample Knit or Crochet'
        case 'custom':
          return 'Inquiry: Custom Knit or Crochet'
        case 'editing':
          return 'Inquiry: Tech and Copy Editing'
        case 'repair':
          return 'Inquiry: Repair Knit or Crocheted Items'
        default:
          return ''
      }
    } else {
      return ''
    }
  }
  return (
    <Layout>
        <Seo title="Contact" />
        <section className="container" id="contact">
            <div className="row">

                <div className="col-sm-12 col-md-8">
                    <h1 className="text-center">Contact</h1>
                    <form name="Contact Form" className="mb-4" method="post" data-netlify="true" action="/thank-you" netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="Contact Form" readOnly/>

                        <div className="form-group mb-2">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" className="form-control" required />
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="email">Email Address:</label>
                            <input type="text" name="email" id="email" className="form-control" required />
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" name="subject" id="subject" className="form-control" defaultValue={getSubject(location.state.subject)} required />
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="body">Message:</label>
                            <textarea name="bodyMessage" id="bodyMessage" rows="5" className="form-control" required />
                        </div>

                        <button className="btn btn-success mt-2">Send Message</button>

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
}

export default ContactPage
