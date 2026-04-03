import React from "react";


const Banner = ({
  title = "About Us",
  subtitle = "Protection, color change, and restoration crafted for enthusiasts",
  currentPage = "About",
}) => {
  return (
    <section className="vv-banner d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="vv-banner-content">
              <h1 className="vv-banner-title mb-3 mt-4 mt-md-0">{title}</h1>

              <p className="vv-banner-subtitle mb-3 mb-md-4">
                {subtitle}
              </p>

              <div className="vv-banner-breadcrumb d-flex justify-content-center align-items-center flex-wrap gap-1">
                <span className="vv-banner-home">Home</span>
                <span className="vv-banner-slash">/</span>
                <span className="vv-banner-current">{currentPage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;