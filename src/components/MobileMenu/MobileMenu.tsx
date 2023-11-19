import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./MobileMenu.scss";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Toggle body scroll
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the menu
    document.body.style.overflow = "auto"; // Restore body scroll
  };

  return (
    <div className={`c-mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="c-mobile-menu__toggle" onClick={toggleMenu}>
        <motion.div
          className="c-mobile-menu__toggle__bar"
          initial={{ y: 0 }}
          animate={{ y: isOpen ? 7 : 0 }}
        ></motion.div>
        <motion.div
          className="c-mobile-menu__toggle__bar"
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
        ></motion.div>
        <motion.div
          className="c-mobile-menu__toggle__bar"
          initial={{ y: 0 }}
          animate={{ y: isOpen ? -7 : 0 }}
        ></motion.div>
      </div>
      <div className="c-mobile-menu__content">
        <NavLink
          className="c-mobile-menu__content__item"
          exact="true"
          activeClassName="active"
          onClick={handleMenuItemClick}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="c-mobile-menu__content__item"
          exact="true"
          activeClassName="active"
          onClick={handleMenuItemClick}
          to="/about"
        >
          About me
        </NavLink>
        <NavLink
          className="c-mobile-menu__content__item"
          exact="true"
          activeClassName="active"
          onClick={handleMenuItemClick}
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className="c-mobile-menu__content__item"
          exact="true"
          activeClassName="active"
          onClick={handleMenuItemClick}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};
