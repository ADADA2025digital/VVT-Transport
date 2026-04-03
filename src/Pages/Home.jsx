import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { heroData } from "../constant/data";
import Button from "../Components/Button";
import aboutImg from "../assets/images/aboutimg.jpg";
import ctaImg from "../assets/images/ctaimg.jpg";
import ServiceSection from "../Components/Sections/ServiceSection";
import WorkSection from "../Components/Sections/WorkSection";
import ReviewSection from "../Components/Sections/ReviewSection";
import ArticleSection from "../Components/Sections/ArticleSection";
import contactImg from "../assets/images/contactimg.png";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0 vv-home-page">
        {/* herosection */}
        <section className="vv-hero-section">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            slidesPerView={1}
            loop={true}
            speed={1200}
            effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".vv-hero-prev",
              nextEl: ".vv-hero-next",
            }}
            className="vv-hero-swiper"
          >
            {heroData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="container ">
                  <div className="row align-items-center vv-hero-row">
                    <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                      <div className="vv-hero-content">
                        <h1 className="vv-hero-title">
                          <span className="vv-title-white">
                            {item.titleWhite}{" "}
                          </span>
                          <span className="vv-title-highlight">
                            {item.titleHighlight}
                          </span>
                          <br />
                          <span className="vv-title-white">
                            {item.titleBottom}
                          </span>
                        </h1>

                        <p className="vv-hero-text">{item.description}</p>

                        <div className="d-flex flex-column flex-sm-row gap-3 vv-hero-btn-group mx-5 mx-md-0">
                          <Button
                            text={item.primaryBtnText}
                            variant="primary"
                            to={item.primaryBtnLink}
                          />
                          {/* <Button
                            text={item.secondaryBtnText}
                            variant="primary"
                            to={item.secondaryBtnLink}
                          /> */}
                        </div>

                        <div className="d-flex align-items-center gap-3 vv-hero-arrows">
                          <button
                            className="vv-arrow-btn vv-hero-prev"
                            type="button"
                          >
                            <FaArrowLeft />
                          </button>
                          <button
                            className="vv-arrow-btn vv-hero-next"
                            type="button"
                          >
                            <FaArrowRight />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                      <div className="vv-hero-image-wrap text-center text-lg-end">
                        <img
                          src={item.image}
                          alt="Hero Vehicle"
                          className="img-fluid vv-hero-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="vv-hero-light"></div>
        </section>

        {/* aboutsection */}
        <section className="vv-about-section">
          <div className="container">
            <div className="row align-items-center gy-5">
              <motion.div
                className="col-lg-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="vv-about-image-main-wrap">
                  <div className="vv-about-shape"></div>

                  <div className="vv-about-image-card">
                    <img
                      src={aboutImg}
                      alt="About BlueChip Motors"
                      className="img-fluid vv-about-image"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-lg-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="vv-about-content">
                  <h2 className="vv-about-title mb-4 text-center text-md-start">
                    About <span>Us</span>
                  </h2>

                  <p className="vv-about-text px-4 px-md-0">
                    At VV Transcoats Pty Ltd, we bridge the gap between heavy-duty industrial protection and high-impact corporate branding. Based in the heart of the logistics hub in Minto, NSW, our facility is purpose-built to handle the scale and complexity of commercial fleet maintenance. 
                  </p>

                  <p className="vv-about-text px-4 px-md-0">
                    Founded on the principles of precision and durability, we have become a trusted partner for major transport companies. We understand that in the commercial world, time is money and image is everything. That is why we combine streamlined workflows with premium materials to deliver a finish that doesn't just look good on day one, but stays vibrant through thousands of kilometers on the road. 
                  </p>

                  <div className="vv-about-quote-box ms-5 ms-md-0">
                    <p>
                      Your fleet is a moving billboard — we make sure it looks
                      sharp, professional, and built to last.
                    </p>
                  </div>

                  <div className="d-flex justify-content-center align-item-center mt-5 mt-md-0 mx-5 mx-md-0 justify-content-md-start">
                    <Button variant="primary" text="Learn More" to="/about" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ctasection */}
        <section className="vv-cta-section">
          <div className="container">
            <div className="vv-cta-box">
              <div className="row align-items-center gy-5">
                <motion.div
                  className="col-lg-6"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="vv-cta-content mt-4 mt-md-0">
                    <h2 className="vv-cta-title text-center text-md-start">
                      Elevate Your <span>Fleet</span>
                      <br />
                      With a <span>Professional Finish</span>
                    </h2>

                    <p className="vv-cta-text text-center px-4 px-md-0 text-md-start">
                      Your fleet represents your brand on every journey. At VV
                      Transcoats, we deliver high-quality painting, branding,
                      and debranding solutions designed for durability,
                      precision, and long-term performance on the road.
                    </p>

                    <ul className="vv-cta-list ms-5 ms-md-0 ps-5 ps-md-0">
                      <li>Commercial Fleet Specialists</li>
                      <li>Durable Industrial-Grade Finishes</li>
                      <li>Fast Turnaround to Reduce Downtime</li>
                      <li>Branding, Debranding & Full Resprays</li>
                    </ul>

                    <div className="vv-cta-btns d-flex flex-wrap gap-3 mx-5 mx-md-0">
                      <Button text="About Us" variant="primary" to="/about" />
                      <Button
                        text="Our Services"
                        variant="primary"
                        to="/service"
                      />
                      <Button
                        text="Request a Quote"
                        variant="primary"
                        to="/RequestQuote"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="col-lg-6"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="vv-cta-image-wrap">
                    <div className="vv-cta-right-shape"></div>
                    <div className="vv-cta-image-card">
                      <img
                        src={ctaImg}
                        alt="Vehicle paint service"
                        className="img-fluid vv-cta-image"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* servicesection */}
        <ServiceSection />

        {/* worksection */}
        <WorkSection />

        {/* reviewsection */}
        <ReviewSection />

        {/* articlesection */}
        <ArticleSection />

        {/* contactussection */}
        <section className="vv-contact-section">
          <div className="container">
            <div className="row g-0 align-items-stretch vv-contact-row gap-2 gap-md-0">
              <motion.div
                className="col-lg-7 d-flex pe-lg-2"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="vv-contact-info-box h-100 w-100">
                  <div className="row align-items-center gy-4">
                    <div className="col-md-6">
                      <div className="vv-contact-content">
                        <h2 className="vv-contact-title">
                          Contact <span>Us</span>
                        </h2>

                        <ul className="vv-contact-list">
                          <li>
                            <span className="vv-contact-icon">
                              <FaLocationDot />
                            </span>
                            <a
                              href="https://www.google.com/maps/search/?api=1&query=Factory+10+13+Swaffham+Road+Minto+NSW+2566"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              Factory 10/13 Swaffham Road, Minto NSW
                            </a>
                          </li>
                          <li>
                            <span className="vv-contact-icon">
                              <FaPhone />
                            </span>
                            <a
                              href="tel:+61200000000"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              +61 2 0000 0000
                            </a>
                          </li>

                          <li>
                            <span className="vv-contact-icon">
                              <FaEnvelope />
                            </span>
                            <a
                              href="mailto:info@vvtranscoats.au"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              info@vvtranscoats.au
                            </a>
                          </li>
                        </ul>

                        <div className="vv-contact-btn-wrap">
                          <Link to="/RequestQuote" className="vv-contact-more-btn">
                            Request a Quote
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="vv-contact-map-wrap">
                        <iframe
                          title="Google Map"
                          src="https://www.google.com/maps?q=Factory%2010%2F13%20Swaffham%20Road%2C%20Minto%20NSW%202566&z=13&output=embed"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-lg-5 d-flex ps-lg-2"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="vv-contact-image-box w-100 h-100">
                  <img
                    src={contactImg}
                    alt="Contact section"
                    className="img-fluid vv-contact-image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
