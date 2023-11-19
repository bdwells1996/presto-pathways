import { Element, Link, animateScroll as scroll } from "react-scroll";
import "../../assets/global-scss/objects/objects.wrapper.scss";
import HomeBlob from "../../assets/images/blob.svg";
import { FeaturedTrips } from "../../components/FeaturedTrips/FeaturedTrips";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import "./Home.scss";

export const Home = () => {
  return (
    <>
      <div className="c-home">
        <Element className="c-hero-home o-wrapper">
          <div className="c-hero-home__text">
            <p className="c-hero-home__text__tagline">Find your next unique</p>
            <h1 className="c-hero-home__text__title">Travel Experience</h1>
            <a className="o-btn c-hero-home__text__link">Speak to an expert</a>
          </div>
          <div className="c-hero-home__img">
            <img src={HomeBlob} alt="Scenic Aside Image" />
          </div>
          <Link
            className="c-hero-home__slider"
            to="featured-trips"
            smooth={true}
            duration={800}
          >
            <button>Browse featured destinations</button>
          </Link>
        </Element>
      </div>
      <FeaturedTrips />
      <Testimonials />
    </>
  );
};
