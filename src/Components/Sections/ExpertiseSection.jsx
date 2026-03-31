import React from "react";
import { motion } from "motion/react";
import ExpertiseCard from "../ExpertiseCard";
import { expertiseData } from "../../constant/data";
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

const ExpertiseSection = () => {
  return (
    <section className="vv-expertise-section py-5 ">
      <div className="container my-5">
        <motion.div
          className="vv-expertise-heading text-center mb-4 mb-lg-5"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="vv-expertise-main-title">
            Our <span>Expertise</span>
          </h2>
        </motion.div>

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
              prevEl: ".vv-exp-prevv",
              nextEl: ".vv-exp-nextt",
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              992: { slidesPerView: 2 },
            }}
            style={{
              width: "100%",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            {expertiseData.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{
                  height: "auto",
                  display: "flex",
                }}
              >
                <div style={{ width: "100%" }} className="px-2 px-md-0">
                  <ExpertiseCard
                    badge={item.badge}
                    title={item.title}
                    description={item.description}
                    features={item.features}
                    price={item.price}
                    buttonText={item.buttonText}
                    image={item.image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="vv-expertise-nav d-flex justify-content-center align-items-center gap-2 mt-4"
          variants={navVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <button type="button" className="vv-work-arrow-btn vv-exp-prevv">
            <FaArrowLeft />
          </button>
          <button type="button" className="vv-work-arrow-btn vv-exp-nextt">
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;