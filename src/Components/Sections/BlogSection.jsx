import React from "react";
import { motion } from "motion/react";
import BlogCard from "../BlogCard";
import {
  blogFeaturedPost,
  blogSidePostsLeft,
  blogSidePostsRight,
} from "../../constant/data";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
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

const featuredVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function BlogSection() {
  return (
    <section className="blog-section vv-blog-section">
      <div className="container">
        <div className="row align-items-start justify-content-center g-4">

          {/* LEFT */}
          <div className="col-lg-3 col-md-6">
            <motion.div
              className="vv-blog-side-column"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {blogSidePostsLeft.map((post) => (
                <motion.div key={post.id} variants={cardVariant}>
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CENTER FEATURED */}
          <div className="col-lg-6 col-md-12">
            <motion.div
              variants={featuredVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <BlogCard post={blogFeaturedPost} featured />
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-3 col-md-6">
            <motion.div
              className="vv-blog-side-column"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {blogSidePostsRight.map((post) => (
                <motion.div key={post.id} variants={cardVariant}>
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogSection;