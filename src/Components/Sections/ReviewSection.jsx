import React from "react";
import { motion } from "motion/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { reviewsData } from "../../constant/data";
import ReviewCard from "../ReviewCard";

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

const ReviewSection = () => {
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
    <section className="vv-review-section">
      <div className="container position-relative">

        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              className="vv-review-heading text-center"
              variants={headingVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="vv-review-title">
                Customer <span>Reviews</span>
              </h2>
            </motion.div>
          </div>
        </div>

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
              prevEl: ".vv-review-prev",
              nextEl: ".vv-review-next",
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <div
                  style={{ width: "100%" }}
                  className="mt-5 px-4 px-md-0"
                >
                  <ReviewCard
                    quote={review.quote}
                    name={review.name}
                    active={review.active}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Arrows */}
        <motion.div
          className="vv-review-arrows d-flex justify-content-center align-items-center gap-3"
          style={{ marginTop: "30px" }}
          variants={arrowVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <button
            type="button"
            className="vv-review-prev vv-work-arrow-btn"
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
            className="vv-review-next vv-work-arrow-btn"
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

export default ReviewSection;