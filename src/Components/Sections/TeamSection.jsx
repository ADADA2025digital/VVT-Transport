import React from "react";
import { motion } from "motion/react";
import TeamCard from "../TeamCard";
import { teamData } from "../../constant/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const headerVariant = {
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

const TeamSection = () => {
  return (
    <section className="vv-team-section py-5">
      <div className="container my-md-5">
        <motion.div
          className="vv-team-header text-center"
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="vv-team-title">
            Meet our <span>Team</span>
          </h2>
          <p className="vv-team-subtitle mb-0">
            Premium car service with zero drama.
            <br />
            Transparent pricing, factory-grade equipment.
          </p>
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
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".vv-team-prev",
              nextEl: ".vv-team-next",
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            style={{
              width: "100%",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "30px",
            }}
          >
            {teamData.map((member) => (
              <SwiperSlide
                key={member.id}
                style={{
                  height: "auto",
                  display: "flex",
                }}
              >
                <div style={{ width: "100%" }} className="px-4 px-md-0">
                  <TeamCard
                    image={member.image}
                    name={member.name}
                    role={member.role}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="vv-team-nav d-flex align-items-center justify-content-center gap-3 mt-4"
          variants={navVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <button type="button" className="vv-work-arrow-btn vv-team-prev">
            <FaArrowLeft />
          </button>
          <button type="button" className="vv-work-arrow-btn vv-team-next">
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;