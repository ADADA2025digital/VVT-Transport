import React from "react";
import { motion } from "motion/react";
import { servicesData } from "../../constant/data";
import ServiceCard from "../ServiceCard";
import Button from "../Button";

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

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const buttonVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const ServiceSection = () => {
  return (
    <section className="vv-service-section">
      <div className="vv-service-shape-left"></div>
      <div className="vv-service-shape-right"></div>

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              className="vv-service-heading text-center"
              variants={headingVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="vv-service-title">
                Our <span>Services</span> Summary
              </h2>
              <p className="vv-service-subtitle px-4 px-md-0">
                Expert paint and body repair services to restore your car’s
                appearance like new.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="row g-4 justify-content-center mt-4"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
              variants={cardVariant}
            >
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center vv-service-btn-wrap mt-5 mx-5 mx-md-0"
          variants={buttonVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Button text="View All Ours" variant="primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;