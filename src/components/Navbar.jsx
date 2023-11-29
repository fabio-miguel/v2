import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useColor } from "./ColorContext";
import ColorSwatch from "./ColorSwatch";

const Navbar = () => {
  const { backgroundColor } = useColor();
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setNav(false);
  }, [location]);

  const isHomePage = location.pathname === "/";
  return (
    <>
      <nav style={{ background: backgroundColor }}>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              {isHomePage ? (
                <Link smooth to="/#top" onClick={openNav}>
                  HOME
                </Link>
              ) : (
                <Link to="/" onClick={openNav}>
                  HOME
                </Link>
              )}
            </li>
            <li>
              <Link smooth to="/about" onClick={openNav}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link smooth to="/services" onClick={openNav}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link smooth to="/releases" onClick={openNav}>
                RELEASES
              </Link>
            </li>
            <li>
              <Link smooth to="/contact" onClick={openNav}>
                LET'S WORK <i className="fa-regular fa-lightbulb"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="site-links">
            <ul className="navbar-links">
              <li>
                <Link smooth to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link smooth to="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link smooth to="/services">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link smooth to="/releases">
                  RELEASES
                </Link>
              </li>
              <li>
                <a href="mailto:info@fabiomiguel.com">
                  LET'S WORK <i className="fa-regular fa-lightbulb"></i>
                </a>
              </li>
            </ul>
            <div>
              <ColorSwatch />
            </div>

            <div className="mobile-hamb" onClick={openNav}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
