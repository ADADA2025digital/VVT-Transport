import React from "react";
import { motion } from "motion/react";
import Banner from "../Components/Banner";
import BlogSection from "../Components/Sections/BlogSection";

function Blog() {
  return (
    <>
      <div className="container-fluid p-0 vv-about-page">
        <Banner
          title="Articles"
          subtitle="Protection, color change, and restoration crafted for enthusiasts"
          currentPage="Blog"
        />

        <section className="vv-blog-insights-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">

                <motion.h2
                  className="vv-blog-insights-title"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Blog <span>Insights</span>
                </motion.h2>

              </div>
            </div>

            <BlogSection />
          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;