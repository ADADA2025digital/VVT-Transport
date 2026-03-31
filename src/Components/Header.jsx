import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaClock,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

const TOPBAR_HEIGHT = 68;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 992 : true,
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClose = () => {
    setShowMenu(false);
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
  };

  const handleShow = () => {
    if (window.innerWidth < 992) {
      setShowMenu(true);
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992;
      setIsDesktop(desktop);

      if (desktop && showMenu) {
        setShowMenu(false);
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
      }

      if (!desktop) {
        setIsScrolled(false);
      }
    };

    const handleScroll = () => {
      if (window.innerWidth >= 992) {
        setIsScrolled(window.scrollY > 60);
      } else {
        setIsScrolled(false);
      }
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMenu]);

  const topbarStyle = {
    transform: isDesktop && isScrolled ? "translateY(-100%)" : "translateY(0)",
    opacity: isDesktop && isScrolled ? 0 : 1,
    visibility: isDesktop && isScrolled ? "hidden" : "visible",
  };

  const navbarStyle = {
    top: isDesktop ? (isScrolled ? "0px" : `${TOPBAR_HEIGHT}px`) : "0px",
    background: isScrolled ? "rgba(23, 23, 23, 0.95)" : "transparent",
    backdropFilter: isScrolled ? "blur(10px)" : "none",
    boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.25)" : "none",
  };

  return (
    <>
      <header className="vv-header">
        {/* Desktop Top Bar */}
        <div className="vv-topbar d-none d-lg-block" style={topbarStyle}>
          <Container>
            <div className="d-flex align-items-center justify-content-between gap-3 vv-topbar-inner">
              <div className="d-flex align-items-center flex-wrap vv-topbar-left">
                <div className="d-flex align-items-center vv-topbar-item">
                  <span className="d-inline-flex align-items-center justify-content-center vv-topbar-icon">
                    <FaPhoneAlt />
                  </span>
                  <div className="d-flex flex-column vv-topbar-text">
                    <small>Call us</small>
                    <strong>
                      <a href="tel:123456789" className="vv-phone-link">
                        123 456 789
                      </a>
                    </strong>
                  </div>
                </div>

                <div className="d-flex align-items-center vv-topbar-item">
                  <span className="d-inline-flex align-items-center justify-content-center vv-topbar-icon">
                    <FaClock />
                  </span>
                  <div className="d-flex flex-column vv-topbar-text">
                    <small>Opening Hours</small>
                    <strong>Mon to Fri : 8.00-20.00</strong>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center vv-topbar-right">
                <a href="#" className="vv-social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="vv-social-link" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="#" className="vv-social-link" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="vv-social-link" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Navbar */}
        <Navbar expand="lg" className="vv-navbar" style={navbarStyle}>
          <Container>
            <Link
              to="/"
              className="d-inline-flex align-items-center text-decoration-none vv-logo-wrap"
            >
              <img
                src={logo}
                alt="VV Trans Logo"
                className="vv-logo img-fluid"
              />
            </Link>

            <button
              className="vv-mobile-toggler d-lg-none"
              type="button"
              onClick={handleShow}
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list"></i>
            </button>

            <Navbar.Collapse className="d-none d-lg-flex justify-content-end">
              <Nav className="d-flex align-items-center vv-nav-pill">
                <NavLink to="/" end className="vv-nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="vv-nav-link">
                  About
                </NavLink>
                <NavLink to="/service" className="vv-nav-link">
                  Service
                </NavLink>
                <NavLink to="/blog" className="vv-nav-link">
                  Blog
                </NavLink>
                <NavLink to="/contact" className="vv-nav-link">
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* Mobile Only Offcanvas */}
      {!isDesktop && (
        <Offcanvas
          show={showMenu}
          onHide={handleClose}
          placement="end"
          className="vv-mobile-offcanvas vv-full-width-offcanvas"
          backdropClassName="vv-offcanvas-backdrop"
          scroll={false}
          enforceFocus={true}
          restoreFocus={true}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={logo} alt="VV Trans Logo" className="vv-mobile-logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="d-flex flex-column justify-content-between vv-offcanvas-body">
            {/* Centered Navigation */}
            <div className="flex-grow-1 d-flex align-items-center justify-content-center vv-offcanvas-nav-wrapper">
              <Nav className="flex-column w-100 text-center vv-offcanvas-nav">
                <NavLink
                  to="/"
                  end
                  className="vv-mobile-nav-link"
                  onClick={handleClose}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="vv-mobile-nav-link"
                  onClick={handleClose}
                >
                  About
                </NavLink>
                <NavLink
                  to="/service"
                  className="vv-mobile-nav-link"
                  onClick={handleClose}
                >
                  Service
                </NavLink>
                <NavLink
                  to="/blog"
                  className="vv-mobile-nav-link"
                  onClick={handleClose}
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/contact"
                  className="vv-mobile-nav-link"
                  onClick={handleClose}
                >
                  Contact
                </NavLink>
              </Nav>
            </div>

            {/* Topbar Details at Bottom */}
            <div className="vv-offcanvas-footer">
              {/* Contact Info */}
              <div className="d-flex flex-column align-items-center vv-offcanvas-contact">
                <div className="d-flex align-items-center justify-content-center vv-offcanvas-contact-item">
                  <span className="d-inline-flex align-items-center justify-content-center vv-offcanvas-contact-icon">
                    <FaPhoneAlt />
                  </span>
                  <div className="d-flex flex-column vv-offcanvas-contact-text">
                    <small>Call us</small>
                    <strong>
                      <a href="tel:123456789" className="vv-phone-link">
                        123 456 789
                      </a>
                    </strong>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-center vv-offcanvas-contact-item">
                  <span className="d-inline-flex align-items-center justify-content-center vv-offcanvas-contact-icon">
                    <FaClock />
                  </span>
                  <div className="d-flex flex-column vv-offcanvas-contact-text">
                    <small>Opening Hours</small>
                    <strong>Mon to Fri : 8.00-20.00</strong>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="d-flex align-items-center justify-content-center vv-mobile-socials">
                <a href="#" className="vv-social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="vv-social-link" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="#" className="vv-social-link" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="vv-social-link" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default Header;
