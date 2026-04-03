import React from "react";
import { useParams, Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Button from "../Components/Button";
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

        <section className="vv-blog-view-section py-5">
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

  const relatedBlogs = allBlogPosts.filter((item) => item.slug !== slug).slice(0, 4);

  return (
    <div className="container-fluid p-0 vv-about-page">
      <Banner
        title="Articles"
        subtitle="Protection, color change, and restoration crafted for enthusiasts"
        currentPage={`Blog / ${blog.title}`}
      />

      <section className="vv-blog-view-section py-5">
        <div className="container">
          <div className="row g-4">
            {/* LEFT CONTENT */}
            <div className="col-lg-8">
              <div className="vv-blog-view-wrapper">
                <div className="vv-blog-view-meta">
                  <span className="vv-blog-view-date">{blog.date}</span>
                </div>

                <h1 className="vv-blog-view-title">{blog.title}</h1>

                <p className="vv-blog-view-short-desc">{blog.description}</p>

                <div className="vv-blog-view-article">
                  <div className="vv-blog-view-float-image-wrap">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="vv-blog-view-float-image"
                    />
                  </div>

                  {paragraphs.length > 0 ? (
                    paragraphs.map((para, index) => (
                      <p key={index} className="vv-blog-view-paragraph">
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="vv-blog-view-paragraph">{blog.description}</p>
                  )}

                  <div className="vv-blog-view-clear"></div>
                </div>

                <div className="d-flex justify-content-start mt-4">
                  <Link to="/blog">
                    <Button text="Back to Blog" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4">
              <div className="vv-blog-sidebar">
                <h3 className="vv-blog-sidebar-title">Other Articles</h3>

                <div className="vv-blog-sidebar-list">
                  {relatedBlogs.map((item) => (
                    <Link
                      key={item.id}
                      to={`/blog/${item.slug}`}
                      className="vv-blog-sidebar-card"
                    >
                      <div className="vv-blog-sidebar-image-wrap">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="vv-blog-sidebar-image"
                        />
                      </div>

                      <div className="vv-blog-sidebar-content">
                        <span className="vv-blog-sidebar-date">{item.date}</span>
                        <h4 className="vv-blog-sidebar-card-title">
                          {item.title}
                        </h4>
                        <p className="vv-blog-sidebar-card-text">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogView;