import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../Button";
import ArticleSideItem from "../ArticleSideItem";
import {
  blogFeaturedPost,
  blogSidePostsLeft,
  blogSidePostsRight,
} from "../../constant/data";

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

const mainCardVariant = {
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

const sideListVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const sideItemVariant = {
  hidden: {
    opacity: 0,
    y: 35,
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
    y: 25,
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

const ArticleSection = () => {
  const sideArticles = [...blogSidePostsLeft, ...blogSidePostsRight];

  return (
    <section className="vv-article-section">
      <div className="vv-article-shape-left"></div>

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              className="vv-article-heading text-center"
              variants={headingVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="vv-article-title">
                Latest from Our <span>Article</span>
              </h2>
              <p className="vv-article-subtitle">
                A showcase of our recent car bodywork project demonstrating
                our expertise and quality craftsmanship
              </p>
            </motion.div>
          </div>
        </div>

        <div className="row align-items-stretch g-4 mt-4">
          <div className="col-lg-6">
            <motion.div
              className="vv-article-main-card"
              variants={mainCardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={blogFeaturedPost.image}
                alt={blogFeaturedPost.title}
                className="img-fluid vv-article-main-img"
              />

              <div className="vv-article-main-overlay"></div>

              <div className="vv-article-main-content">
                <h3 className="vv-article-main-title">
                  {blogFeaturedPost.title}
                </h3>
                <p className="vv-article-main-text">
                  {blogFeaturedPost.description}
                </p>

                <Link
                  to={`/blog/${blogFeaturedPost.slug}`}
                  className="vv-article-main-readmore"
                >
                  [Read More]
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="vv-article-side-list px-3 px-md-0"
              variants={sideListVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {sideArticles.map((item) => (
                <motion.div key={item.id} variants={sideItemVariant}>
                  <ArticleSideItem
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    slug={item.slug}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="vv-article-btn-wrap text-center mx-5 mx-md-0 mt-5"
          variants={buttonVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link to="/blog">
            <Button text="Our Article" variant="primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleSection;