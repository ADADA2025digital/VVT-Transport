import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/styles/style.css";

// Layout
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/About.jsx";
import Service from "./Pages/Service.jsx";
import Blog from "./Pages/Blog.jsx";
import ContactUs from "./Pages/Contact.jsx";
import BlogView from "./Pages/BlogView.jsx";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogView />} />
        <Route path="/RequestQuote" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
