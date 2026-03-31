import React from "react";
import { useParams, Link } from "react-router-dom";
import Banner from "../Components/Banner";

import Button from "../Components/Button";

// import bw1 from "../assets/images/ser2.png";
// import bw2 from "../assets/images/wrk2.png";
// import bw3 from "../assets/images/wrk3.png";

import { allBlogPosts } from "../constant/data";

function BlogView() {
  const { slug } = useParams();

  const blog = allBlogPosts.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="container-fluid p-0 vv-about-page">
        <Banner
          title="Articles"
          subtitle="Protection, color change, and restoration crafted for enthusiasts"
          currentPage="BlogView"
        />

        <section className="vv-blog-view-section py-5 ">
          <div className="container text-center">
            <h2 className="vv-blog-view-notfound-title">Blog Not Found</h2>
            <p className="vv-blog-view-notfound-text">
              The article you are looking for does not exist.
            </p>
            <Link to="/blog" className="vv-blog-view-back-btn">
              Back to Blog
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const paragraphs = blog.content
    ? blog.content
        .trim()
        .split("\n")
        .filter((item) => item.trim() !== "")
    : [];

  return (
    <>
      <div className="container-fluid p-0 vv-about-page ">
        <Banner
          title="Articles"
          subtitle="Protection, color change, and restoration crafted for enthusiasts"
          currentPage={`Blog / ${blog.title}`}
        />

        <section className=" py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="vv-blog-view-wrapper">
                  <div className="vv-blog-view-main-image-wrap">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="img-fluid vv-blog-view-main-image"
                    />
                  </div>

                  <div className="vv-blog-view-meta text-center ">
                    <span className="vv-blog-view-date">{blog.date}</span>
                  </div>

                  <h1 className="vv-blog-view-title text-center ">
                    {blog.title}
                  </h1>

                  <p className="vv-blog-view-short-desc text-center">
                    {blog.description}
                  </p>

                  <div className="vv-blog-view-content text-center px-3 px-md-0 ">
                    {paragraphs.length > 0 ? (
                      paragraphs.map((para, index) => (
                        <p key={index} className="vv-blog-view-paragraph">
                          {para}
                        </p>
                      ))
                    ) : (
                      <p className="vv-blog-view-paragraph">
                        {blog.description}
                      </p>
                    )}
                  </div>

                  {/* <div className="row g-4 vv-blog-view-gallery">
                    <div className="col-md-4">
                      <div className="vv-blog-view-gallery-card">
                        <img
                          src={bw1}
                          alt="Blog gallery 1"
                          className="img-fluid vv-blog-view-gallery-image"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="vv-blog-view-gallery-card">
                        <img
                          src={bw2}
                          alt="Blog gallery 2"
                          className="img-fluid vv-blog-view-gallery-image"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="vv-blog-view-gallery-card">
                        <img
                          src={bw3}
                          alt="Blog gallery 3"
                          className="img-fluid vv-blog-view-gallery-image"
                        />
                      </div>
                    </div>
                  </div> */}

                  <div className="d-flex justify-content-center">
                    <Link to="/blog">
                      <Button text="Back to Blog" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogView;
