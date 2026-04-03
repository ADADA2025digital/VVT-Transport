import React from "react";
import { motion } from "motion/react";
import Banner from "../Components/Banner";
import OfferSection from "../Components/Sections/OfferSection";
import ExpertiseSection from "../Components/Sections/ExpertiseSection";
import PricingCard from "../Components/PricingCard";
import { pricingData } from "../constant/data";

const pricingContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const pricingCardVariant = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

function Service() {
  return (
    <>
      <div className="container-fluid p-0 vv-about-page">
        <Banner
          title="Our Services"
          subtitle="Protection, color change, and restoration crafted for enthusiasts"
          currentPage="Services"
        />

        <OfferSection />
        {/* <ExpertiseSection /> */}

        {/* <section className="vv-pricing-section py-5">
          <div className="container">
            <motion.div
              className="row g-4 justify-content-center"
              variants={pricingContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {pricingData.map((item) => (
                <motion.div
                  className="col-12 col-md-6 col-lg-4 "
                  key={item.id}
                  variants={pricingCardVariant} 
                >
                  <PricingCard
                    title={item.title}
                    price={item.price}
                    duration={item.duration}
                    features={item.features}
                    buttonText={item.buttonText}
                    highlighted={item.highlighted}
                    badge={item.badge}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default Service;