import React from "react";
import Banner from "../Components/Banner";
import ContactSection from "../Components/Sections/ContactSection.jsx";

function Contact() {
  return (
    <>
      <div className="container-fluid p-0 vv-about-page">
        <Banner
          title="Contact"
          subtitle="Protection, color change, and restoration crafted for enthusiasts"
          currentPage="Contact"
        />

        <ContactSection />
      </div>
    </>
  );
}

export default Contact;