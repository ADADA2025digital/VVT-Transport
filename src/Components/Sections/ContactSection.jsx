import React from "react";
import { motion } from "motion/react";
import ContactForm from "../ContactForm.jsx";

const leftContentVariant = {
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

const infoListVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const infoItemVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const mapVariant = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

const formVariant = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

const ContactSection = () => {
  return (
    <section className="vv-contact-section py-5">
      <div className="container my-md-5 py-md-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-6">
            <motion.div
              className="vv-contact-left h-100"
              variants={leftContentVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="vv-contact-left-title text-center text-md-start">Get In Touch</h2>
              <p className="vv-contact-left-subtitle text-center text-md-start px-4 px-md-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium
              </p>

              <motion.div
                className="vv-contact-info-list ps-5 ms-5 ps-md-0 ms-md-0"
                variants={infoListVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  className="vv-contact-info-item "
                  variants={infoItemVariant}
                >
                  <div className="vv-contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=12+Main+street+2nd+lane"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <h6>12, Main street</h6>
                      <p>2nd lane</p>
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="vv-contact-info-item"
                  variants={infoItemVariant}
                >
                  <div className="vv-contact-icon">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div>
                    <h6>Mon - Sat</h6>
                    <p>08.00 - 20.00</p>
                  </div>
                </motion.div>

                <motion.div
                  className="vv-contact-info-item"
                  variants={infoItemVariant}
                >
                  <div className="vv-contact-icon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <a
                      href="tel:+123456789"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <h6>+123 456 789</h6>
                    </a>

                    <a
                      href="mailto:example@gmail.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <p>example@gmail.com</p>
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="vv-contact-map-wrap"
                variants={mapVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Roundhouse%20Park&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-12 col-lg-6">
            <motion.div
              variants={formVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;