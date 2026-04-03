import React, { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const services = [
    "Full Painting",
    "Car Body Painting",
    "Complete Car Care",
    "Interior Detailing",
    "Exterior Polishing",
  ];

  const validate = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^[0-9+\-\s]{7,15}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Enter a valid name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select a service";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Date is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);

      setFormData({
        name: "",
        email: "",
        service: "",
        phone: "",
        date: "",
        message: "",
      });
    }
  };

  return (
    <div className="vv-contact-form-box">
      <h3 className="vv-contact-form-title">Request a Service Quote</h3>
      <p className="vv-contact-form-subtitle">
        Sed ut perspiciatis unde omnis iste voluptatem accusantium
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="vv-contact-label">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            className={`form-control vv-contact-input ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="vv-contact-error">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="vv-contact-label">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className={`form-control vv-contact-input ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="vv-contact-error">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="vv-contact-label">Select Your Services</label>
          <select
            name="service"
            className={`form-select vv-contact-input vv-contact-select ${errors.service ? "is-invalid" : ""}`}
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {services.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.service && <div className="vv-contact-error">{errors.service}</div>}
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="vv-contact-label">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter"
              className={`form-control vv-contact-input ${errors.phone ? "is-invalid" : ""}`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="vv-contact-error">{errors.phone}</div>}
          </div>

          <div className="col-12 col-sm-6 mb-3">
            <label className="vv-contact-label">Date</label>
            <input
              type="date"
              name="date"
              className={`form-control vv-contact-input ${errors.date ? "is-invalid" : ""}`}
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <div className="vv-contact-error">{errors.date}</div>}
          </div>
        </div>

        <div className="mb-4">
          <label className="vv-contact-label">Your Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className={`form-control vv-contact-input vv-contact-textarea ${errors.message ? "is-invalid" : ""}`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="vv-contact-error">{errors.message}</div>}
        </div>

        <div className="d-flex justify-content-end mx-5 mx-md-0">
         

            <Button text="Submit" variant="primary"  />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;