import { Element, animateScroll as scroll } from "react-scroll";
import { HolidayCarousel } from "../HolidayCarousel/HolidayCarousel";
import "./FeaturedTrips.scss";

import IcelandImage from "../../assets/images/example-images/iceland-background.jpg";
import ComoImage from "../../assets/images/example-images/lake-como.jpg";
import HikingIcon from "../../assets/images/icons/adventure.svg";
import CalendarIcon from "../../assets/images/icons/calendar.svg";
import SoloIcon from "../../assets/images/icons/solo.svg";

export const FeaturedTrips = () => {
  const holidays = [
    {
      title: "Icelandic mountain exploration",
      description: "Description 1",
      destination: "Iceland",
      type: "Adventure",
      typeicon: HikingIcon,
      duration: "1 week",
      durationicon: CalendarIcon,
      audience: "Solo travel",
      audienceicon: SoloIcon,
      image: IcelandImage,
    },
    {
      title: "A tour of stunning lakes exploration",
      description: "Description 2",
      destination: "Italy",
      type: "Type 2",
      typeicon: HikingIcon,
      duration: "2 weeks",
      durationicon: CalendarIcon,
      audience: "Families",
      audienceicon: SoloIcon,
      image: ComoImage,
    },
    {
      title: "Icelandic mountain exploration II",
      description:
        "Embark on a journey of awe-inspiring landscapes and rugged beauty with our Icelandic Mountain Exploration Holiday. This carefully curated adventure is designed for those seeking an unforgettable experience amidst Iceland's dramatic peaks and stunning natural wonders.",
      destination: "Iceland",
      type: "Adventure",
      duration: "2 weeks",
      durationicon: CalendarIcon,
      audience: "Solo travel",
      image: IcelandImage,
    },
    {
      title: "Icelandic mountain exploration",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores officia non quibusdam eaque et eum dignissimos repellat atque doloribus nihil, vitae quasi voluptatem nulla minima at, veniam eveniet saepe explicabo.",
      destination: "Italy",
      type: "Family",
      duration: "2 weeks",
      audience: "Families",
      image: IcelandImage,
    },
    {
      title: "Pompeii mountain exploration",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, molestias! Placeat maxime eius praesentium fugiat, qui aspernatur quibusdam explicabo ducimus accusantium veniam esse fugit quas dolore maiores exercitationem ut voluptatem.",
      destination: "Italy",
      type: "Adventure",
      typeicon: HikingIcon,
      duration: "1 week",
      durationicon: CalendarIcon,
      audience: "Everyone",
      audienceicon: SoloIcon,
      image: IcelandImage,
    },
    {
      title: "Icelandic mountain exploration",
      description: "Description 2",
      destination: "Destination 2",
      type: "Type 2",
      duration: "1 week",
      audience: "solo travel",
      image: IcelandImage,
    },
  ];

  return (
    <Element name="featured-trips" className="c-featured-trips">
      <div className="o-wrapper c-featured-trips__inner">
        <h2 className="c-featured-trips__inner__heading">Featured Trips</h2>
        <HolidayCarousel holidays={holidays} />
      </div>
    </Element>
  );
};
