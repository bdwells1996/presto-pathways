import { useEffect, useState } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./HolidayCarousel.scss";

export const HolidayCarousel = ({ holidays }) => {
  const [destinationFilter, setDestinationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [filteredHolidays, setFilteredHolidays] = useState([]);

  useEffect(() => {
    // Filter holidays based on selected destination and type
    const newFilteredHolidays = holidays.filter((holiday) => {
      const destinationMatch =
        destinationFilter === "All" ||
        holiday.destination === destinationFilter;
      const typeMatch = typeFilter === "All" || holiday.type === typeFilter;
      return destinationMatch && typeMatch;
    });

    setFilteredHolidays(newFilteredHolidays);
  }, [holidays, destinationFilter, typeFilter]);

  const handleDestinationChange = (event) => {
    setDestinationFilter(event.target.value);
  };

  const handleTypeChange = (event) => {
    setTypeFilter(event.target.value);
  };

  return (
    <div className="c-holiday-carousel">
      <div className="c-holiday-carousel__filter">
        <label className="c-holiday-carousel__filter__label">
          Destination:
        </label>
        <select
          className="c-holiday-carousel__filter__dropdown"
          value={destinationFilter}
          onChange={handleDestinationChange}
        >
          <option value="All">All</option>
          <option value="Iceland">Iceland</option>
          <option value="Italy">Italy</option>
        </select>
      </div>
      <div className="c-holiday-carousel__filter">
        <label className="c-holiday-carousel__filter__label">
          Type of Holiday:
        </label>
        <select
          className="c-holiday-carousel__filter__dropdown"
          value={typeFilter}
          onChange={handleTypeChange}
        >
          <option value="All">All</option>
          <option value="Family">Family</option>
          <option value="Adventure">Adventure</option>
          {/* Add other type options based on your data */}
        </select>
      </div>
      {filteredHolidays.length === 0 ? (
        <div className="c-holiday-carousel__empty">
          <h3 className="c-holiday-carousel__empty__title">
            Looks like there aren’t any trips matching that criteria
          </h3>
          <p className="c-holiday-carousel__empty__text">
            But we’d be happy to help plan a bespoke trip!
          </p>
          <a className="o-btn">Speak to an expert</a>
        </div>
      ) : (
        <Swiper
          className="c-holiday-carousel__slider"
          navigation
          pagination={{ clickable: true }}
          modules={[A11y, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1040: {
              slidesPerView: 3,
            },
            1390: {
              slidesPerView: 4,
            },
          }}
        >
          {filteredHolidays.map((holiday, index) => (
            <SwiperSlide
              className="c-holiday-carousel__slider__slide"
              key={index}
            >
              <div className="c-holiday-carousel__slider__slide__labels">
                <div className="c-holiday-carousel__slider__slide__labels__item">
                  <img
                    src={holiday.typeicon}
                    alt=""
                    className="c-holiday-carousel__slider__slide__labels__item__img"
                  />
                  <p className="c-holiday-carousel__slider__slide__labels__item__text">
                    {holiday.type}
                  </p>
                </div>
                <div className="c-holiday-carousel__slider__slide__labels__item">
                  <img
                    src={holiday.durationicon}
                    alt=""
                    className="c-holiday-carousel__slider__slide__labels__item__img"
                  />
                  <p className="c-holiday-carousel__slider__slide__labels__item__text">
                    {holiday.duration}
                  </p>
                </div>
                <div className="c-holiday-carousel__slider__slide__labels__item">
                  <img
                    src={holiday.audienceicon}
                    alt=""
                    className="c-holiday-carousel__slider__slide__labels__item__img"
                  />
                  <p className="c-holiday-carousel__slider__slide__labels__item__text">
                    {holiday.audience}
                  </p>
                </div>
              </div>
              <div className="c-holiday-carousel__slider__slide__img">
                <img src={holiday.image} alt={holiday.title} />
              </div>
              <h3 className="c-holiday-carousel__slider__slide__title">
                {holiday.title}
              </h3>
              <div className="c-holiday-carousel__slider__slide__text">
                <p>{holiday.description}</p>
                <a href="/" class="o-btn">
                  Learn More
                </a>
              </div>
              {/* Add other holiday card content */}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
