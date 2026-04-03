import React from "react";
import { Container } from "react-bootstrap";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import bg from "../assets/images/fbg.png";

const Footer = () => {
  return (
    <footer
      className="vv-footer-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="vv-footer-overlay">
        <div className="container-fluid p-0">
          <div className="container">
            <div className="row vv-footer-row">
              {/* LEFT */}
              <div className="col-lg-4 col-md-6 col-12 vv-footer-col text-lg-start text-center">
                <div className="d-flex justify-content-start justify-content-center justify-content-sm-start mb-3">
                  <img src={logo} alt="logo" className="vv-footer-logo" />
                </div>

                <p className="vv-footer-text">
                  On the other hand, we denounce with righteous indignation
                </p>

                <p className="vv-footer-text">
                  dislike men who are so beguiled and demoralized by the charms.
                </p>
              </div>

              {/* CONTACT */}
              <div className="col-lg-3 col-md-6 col-12 vv-footer-col text-lg-start text-center">
                <h5 className="vv-footer-title">Our Services</h5>

                <ul className="vv-footer-list">
                  <li>Commercial Vehicle Painting</li>
                  <li>Fleet Branding</li>
                  <li>Professional Debranding</li>
                  <li>Restoration & Refurbishment</li>
                  <li>Custom Commercial Spray Painting</li>
                  <li>Corporate Branding & Livery</li>
                  <li>Debranding & Lease Returns</li>
                  <li>Fleet Maintenance Programs</li>
                </ul>
              </div>

              {/* QUICK LINKS */}
              <div className="col-lg-2 col-md-6 col-12 vv-footer-col text-lg-start text-center">
                <h5 className="vv-footer-title">Quick links</h5>

                <ul className="vv-footer-list">
                  <li>
                    <a href="/" className="footer-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="footer-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/service" className="footer-link">
                      Our Service
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="footer-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="footer-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* SERVICES */}
              <div className="col-lg-3 col-md-6 col-12 vv-footer-col text-lg-start text-center">
                <h5 className="vv-footer-title">Contact</h5>

                <div className="vv-footer-contact">
                  <a href="tel:+61200000000" className="vv-footer-link">
                    +61 2 0000 0000
                  </a>

                  <a
                    href="mailto:info@vvtranscoats.au"
                    className="vv-footer-link"
                  >
                    info@vvtranscoats.au
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Factory+10+13+Swaffham+Road+Minto+NSW+2566"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vv-footer-link"
                  >
                    Factory 10/13 Swaffham Road, Minto NSW
                  </a>

                  <div className="vv-footer-social">
                    <a href="#">
                      <FaInstagram />
                    </a>
                    <a href="#">
                      <FaYoutube />
                    </a>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="vv-footer-bottom">
            <div className="container text-center">
              <p className="mb-0">
                Copyright © {new Date().getFullYear()}. All rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
