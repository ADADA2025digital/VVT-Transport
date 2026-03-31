import React from "react";
import { motion } from "motion/react";
import OfferCard from "../OfferCard";
import { serviceOfferData } from "../../constant/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const headingVariant = {
  hidden: {
    opacity: 0,
    y: 35,
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

const sliderVariant = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

const navVariant = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const OfferSection = () => {
  return (
    <section className="vv-offer-section py-5" style={{ position: "relative" }}>
      <div className="container pt-md-5 mt-md-5 ">
        
        {/* Heading */}
        <motion.div
          className="vv-offer-heading text-center mb-4 mb-lg-5"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="vv-offer-subtitle">What We Offer</span>
          <h2 className="vv-offer-title">
            Premium Car <span>Services</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <motion.div
          variants={sliderVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={900}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".vv-exp-prev",
              nextEl: ".vv-exp-next",
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {serviceOfferData.map((item) => (
              <SwiperSlide
                key={item.id}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="w-100 d-flex justify-content-center px-4 px-md-0">
                  <OfferCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    duration={item.duration}
                    features={item.features}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Arrows */}
        <motion.div
          className="vv-expertise-nav d-flex justify-content-center align-items-center gap-2 mt-4"
          style={{ position: "relative", zIndex: 2 }}
          variants={navVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <button type="button" className="vv-work-arrow-btn vv-exp-prev">
            <FaArrowLeft />
          </button>
          <button type="button" className="vv-work-arrow-btn vv-exp-next">
            <FaArrowRight />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default OfferSection;