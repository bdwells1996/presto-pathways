import { Link } from "react-router-dom";
import "../../assets/global-scss/objects/objects.buttons.scss";
import logoImg from "../../assets/images/Logo.svg";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import "./Nav.scss";

export const Nav = () => {
  return (
    <nav className="c-nav">
      <Link className="c-nav__logo" to="/">
        <img src={logoImg} alt="Presto Pathways" />
      </Link>

      <MobileMenu />

      <ul className="c-nav__items">
        <li className="c-nav__items__item">
          <Link className="o-btn" to="/browse-destinations">
            Browse Destinations
          </Link>
        </li>
        <li className="c-nav__items__item">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="c-nav__items__item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="c-nav__items__item">
          <Link to="/get-in-touch">Get in touch</Link>
        </li>
      </ul>
    </nav>
  );
};
