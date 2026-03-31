import React from "react";
import { motion } from "motion/react";
import TrustCard from "../TrustCard";
import { trustData } from "../../constant/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const titleVariant = {
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

const TrustSection = () => {
  return (
    <section className="vv-trust-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              className="text-center mb-4 mb-lg-5"
              variants={titleVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="vv-trust-title mb-0">
                Why Customer <span>Trust Us</span>
              </h2>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={sliderVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={900}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 4,
              },
            }}
          
          >
            {trustData.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{
                  height: "auto",
                  display: "flex",
                }}
              >
                <div style={{ width: "100%" }} className="px-5 px-md-0">
                  <TrustCard icon={item.icon} title={item.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;