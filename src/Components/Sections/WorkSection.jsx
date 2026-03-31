import React from "react";
import { motion } from "motion/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { worksData } from "../../constant/data";
import WorkCard from "../WorkCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const headingVariant = {
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

const arrowVariant = {
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

const WorkSection = () => {
  const arrowStyle = {
    width: "48px",
    height: "48px",
    border: "none",
    outline: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <section className="vv-work-section">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              className="vv-work-heading text-center"
              variants={headingVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="vv-work-title">
                Our Recent <span>Works</span> and <span>Case Studies</span>
              </h2>
              <p className="vv-work-subtitle">
                A showcase of our recent car bodywork project demonstrating
                our expertise and quality craftsmanship
              </p>
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
              prevEl: ".vv-work-prev",
              nextEl: ".vv-work-next",
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
          >
            {worksData.map((work) => (
              <SwiperSlide
                key={work.id}
                style={{
                  height: "auto",
                  display: "flex",
                }}
              >
                <div style={{ width: "100%" }} className="mt-4 mx-3 mx-md-0">
                  <WorkCard image={work.image} title={work.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="d-flex justify-content-center align-items-center gap-3"
          style={{ marginTop: "30px" }}
          variants={arrowVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <button
            type="button"
            className="vv-work-prev vv-work-arrow-btn"
            style={arrowStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <FaArrowLeft />
          </button>

          <button
            type="button"
            className="vv-work-next vv-work-arrow-btn"
            style={arrowStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;