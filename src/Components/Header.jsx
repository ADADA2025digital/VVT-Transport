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
import logo from "../assets/images/logo3.png";

const TOPBAR_HEIGHT = 68;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 992 : true,
  );
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll when offcanvas is open
  const lockBodyScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${window.scrollY}px`;
    // Store current scroll position to restore later
    document.body.dataset.scrollY = window.scrollY.toString();
  };

  const unlockBodyScroll = () => {
    const scrollY = document.body.dataset.scrollY;
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
      delete document.body.dataset.scrollY;
    }
  };

  const handleClose = () => {
    setShowMenu(false);
    unlockBodyScroll();
  };

  const handleShow = () => {
    if (window.innerWidth < 992) {
      setShowMenu(true);
      lockBodyScroll();
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      unlockBodyScroll();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992;
      setIsDesktop(desktop);

      if (desktop && showMenu) {
        setShowMenu(false);
        unlockBodyScroll();
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
    transition: "all 0.4s ease",
  };

  const navbarStyle = {
    top: isDesktop ? (isScrolled ? "0px" : `${TOPBAR_HEIGHT}px`) : "0px",
    background: isScrolled ? "rgba(46, 45, 45, 0.95)" : "transparent",
    backdropFilter: isScrolled ? "blur(10px)" : "none",
    boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.25)" : "none",
    transition: "all 0.4s ease",
  };

  return (
    <>
      <header className="vv-header">
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
                      <a href="tel:+61200000000" className="vv-phone-link">
                        +61 2 0000 0000
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
                    <strong>Mon to Fri : 08.00 - 17.00</strong>
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

        <Navbar
          expand="lg"
          className="vv-navbar"
          style={{
            ...navbarStyle,
            height: isDesktop ? (isScrolled ? "90px" : "150px") : "90px",
            backgroundColor: isDesktop ? navbarStyle.background : "#1a1a1a", // <-- mobile header color
            transition: "all 0.4s ease",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container
            style={{
              height: isDesktop ? (isScrolled ? "90px" : "150px") : "70px", // mobile height

              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              to="/"
              className="d-inline-flex align-items-center text-decoration-none vv-logo-wrap"
            >
              <img
                src={logo}
                alt="VV Trans Logo"
                className="vv-logo img-fluid"
                style={{
                  height: isDesktop ? (isScrolled ? "70px" : "100px") : "50px", // smaller on mobile
                  width: "auto",
                  transition: "all 0.4s ease",
                  objectFit: "contain",
                }}
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
                <NavLink to="/RequestQuote" className="vv-nav-link">
                  Request a Quote
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* Mobile Offcanvas - Full height with proper scroll locking */}
      <Offcanvas
        show={showMenu}
        onHide={handleClose}
        placement="end"
        className="vv-mobile-offcanvas vv-full-width-offcanvas"
        backdropClassName="vv-offcanvas-backdrop"
        scroll={false}
        backdrop={true}
        enforceFocus={true}
        restoreFocus={true}
        style={{ height: "100dvh" }}
      >
        <Offcanvas.Header
          closeButton
          className="vv-offcanvas-header d-flex align-items-center justify-content-between"
          style={{
            height: "70px",
            padding: "0 1.5rem",
            backgroundColor: "#1a1a1a", // mobile header color
          }}
        >
          <Offcanvas.Title className="m-0">
            <img
              src={logo}
              alt="VV Trans Logo"
              className="vv-mobile-logo"
              style={{
                height: "50px", // same as mobile logo height in navbar
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body
          className="d-flex flex-column justify-content-between vv-offcanvas-body"
          style={{
            height: "calc(100dvh - 90px)",
            overflowY: "auto",
            padding: "2rem 1.5rem",
          }}
        >
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
                to="/RequestQuote"
                className="vv-mobile-nav-link"
                onClick={handleClose}
              >
                Request a Quote
              </NavLink>
            </Nav>
          </div>

          <div className="vv-offcanvas-footer">
            <div className="d-flex flex-column align-items-center vv-offcanvas-contact">
              <div className="d-flex align-items-center justify-content-center vv-offcanvas-contact-item">
                <span className="d-inline-flex align-items-center justify-content-center vv-offcanvas-contact-icon">
                  <FaPhoneAlt />
                </span>
                <div className="d-flex flex-column vv-offcanvas-contact-text">
                  <small>Call us</small>
                  <strong>
                    <a href="tel:+61200000000" className="vv-phone-link">
                      +61 2 0000 0000
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
                  <strong>Mon to Fri : 08.00 - 17.00</strong>
                </div>
              </div>
            </div>

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
    </>
  );
};

export default Header;
