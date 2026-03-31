import React from "react";
import { motion } from "motion/react";
import Banner from "../Components/Banner";
import TrustSection from "../Components/Sections/TrustSection";
import TeamSection from "../Components/Sections/TeamSection";
import CountSection from "../Components/Sections/CountSection";

import aboutImg1 from "../assets/images/abt1.png";
import aboutImg2 from "../assets/images/abt2.png";
import aboutImg3 from "../assets/images/abt3.png";

const textVariant = {
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

const imageContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const imageItemVariant = {
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

function AboutUs() {
  return (
    <>
      <div className="container-fluid p-0">
        <Banner
          title="About Us"
          subtitle="Protection, color change, and restoration crafted for enthusiasts"
          currentPage="About"
        />

        <section className="about-v3-section">
          <div className="container">
            <div className="row align-items-center g-4 g-lg-5">
              {/* LEFT */}
              <div className="col-lg-6">
                <motion.div
                  className="about-v3-left"
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <h2 className="about-v3-title text-center text-md-start display-2 fw-bold">
                    <span>Who</span> we are?
                  </h2>

                  <p className="about-v3-text text-center text-md-start px-4 px-md-0 ">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, em aperiam,
                    eaque ipsa quae ab illo inventore et quasi architecto
                    beatae vitae dicta sunt Nemo enim ipsam
                  </p>

                  <p className="about-v3-text text-center text-md-start px-4 px-md-0 ">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, em aperiam,
                    eaque ipsa quae ab illo inventore et quasi
                  </p>
                </motion.div>
              </div>

              {/* RIGHT */}
              <div className="col-lg-6">
                <motion.div
                  className="about-v3-images"
                  variants={imageContainerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* SMALL IMAGES */}
                  <motion.div className="about-v3-small" variants={imageItemVariant}>
                    <motion.div className="about-v3-small-img" variants={imageItemVariant}>
                      <img src={aboutImg1} alt="" />
                    </motion.div>

                    <motion.div className="about-v3-small-img" variants={imageItemVariant}>
                      <img src={aboutImg2} alt="" />
                    </motion.div>
                  </motion.div>

                  {/* BIG IMAGE */}
                  <motion.div className="about-v3-big-wrap" variants={imageItemVariant}>
                    <div className="about-v3-accent"></div>

                    <div className="about-v3-big-img">
                      <img src={aboutImg3} alt="" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <TrustSection />
        <TeamSection />
        <CountSection />
      </div>
    </>
  );
}

export default AboutUs;