import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
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
                <div className="container h-100">
                  <div className="row align-items-center vv-hero-row">
                    <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                      <div className="vv-hero-content">
                        <h1 className="vv-hero-title">
                          <span className="vv-title-white">{item.titleWhite} </span>
                          <span className="vv-title-highlight">
                            {item.titleHighlight}
                          </span>
                          <br />
                          <span className="vv-title-white">{item.titleBottom}</span>
                        </h1>

                        <p className="vv-hero-text">{item.description}</p>

                        <div className="d-flex flex-column flex-sm-row gap-3 vv-hero-btn-group mx-5 mx-md-0">
                          <Button text={item.primaryBtnText} variant="primary" />
                          <Button text={item.secondaryBtnText} variant="primary" />
                        </div>

                        <div className="d-flex align-items-center gap-3 vv-hero-arrows">
                          <button className="vv-arrow-btn vv-hero-prev" type="button">
                            <FaArrowLeft />
                          </button>
                          <button className="vv-arrow-btn vv-hero-next" type="button">
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
                    We don't just fix cars - we understand your machine. Family
                    owned, obsessed with precision. Every bolt, every code,
                    every detail. BlueChip motors uniqueness our signature.
                  </p>

                  <p className="vv-about-text px-4 px-md-0">
                    We don't just fix cars - we understand your machine. Family
                    owned, obsessed with precision. Every bolt, every code,
                    every detail. BlueChip motors uniqueness our signature.
                  </p>

                  <div className="vv-about-quote-box ms-5 ms-md-0 ">
                    <p>
                      We don't just fix cars - we understand your machine.
                      Family owned, obsessed with precision
                    </p>
                  </div>

                  <div className="d-flex justify-content-center align-item-center mt-5 mt-md-0 mx-5 mx-md-0 justify-content-md-start">
                    <Button variant="primary" text={"See More"} />
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
                      Give Your <span>Vehicle</span>
                      <br />A <span>Stunning</span> New Look
                    </h2>

                    <p className="vv-cta-text text-center px-4 px-md-0 text-md-start">
                      We don't just fix cars - we understand your machine.
                      Family owned, obsessed with precision. Every bolt, every
                      code, every detail. BlueChip motors uniqueness our
                      signature.
                    </p>

                    <ul className="vv-cta-list ms-5 ms-md-0 ps-5 ps-md-0">
                      <li>Certified Mechanics</li>
                      <li>Fast Service</li>
                      <li>Affordable Pricing</li>
                      <li>All Car Brands Supported</li>
                    </ul>

                    <div className="vv-cta-btns d-flex flex-wrap gap-3 mx-5 mx-md-0">
                      <Button text="Book Now" variant="primary" />
                      <Button text="Our Services" variant="primary" />
                      <Button text="Contact Us" variant="primary" />
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
  <div className="row g-0 align-items-stretch vv-contact-row">
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
                123 2nd main street
              </li>
              <li>
                <span className="vv-contact-icon">
                  <FaPhone />
                </span>
                123 456 789
              </li>
            </ul>

            <div className="vv-contact-btn-wrap">
              <button type="button" className="vv-contact-more-btn">
                More Details
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="vv-contact-map-wrap">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Sydney%20Australia&z=13&output=embed"
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