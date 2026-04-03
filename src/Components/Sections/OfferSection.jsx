import React from "react";
import { motion } from "motion/react";
import OfferCard from "../OfferCard";
import { serviceOfferData } from "../../constant/data";

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

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const OfferSection = () => {
  return (
    <section className="vv-offer-section pt-5  pb-5 pt-md-0 " style={{ position: "relative" }}>
      <div className="container pt-md-5 mt-md-5">
        <motion.div
          className="vv-offer-heading text-center mb-4 mb-lg-5"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="vv-offer-subtitle">What We Offer</span>
          <h2 className="vv-offer-title fs-1">
            Premium Car <span>Services</span>
          </h2>
        </motion.div>

        <div className="row g-5 justify-content-center ">
          {serviceOfferData.map((item, index) => (
            <motion.div
              key={item.id}
              className="col-10 col-md-4"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <OfferCard
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                duration={item.duration}
                features={item.features}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;