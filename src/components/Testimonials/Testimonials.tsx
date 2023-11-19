import { Element } from "react-scroll";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialExample from "../../assets/images/example-images/testimonial-example.jpg";

import "./Testimonials.scss";

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla perspiciatis vitae suscipit expedita alias voluptates exercitationem assumenda perferendis sequi, ex sint nostrum asperiores. Cum voluptas error veritatis at possimus.",
      name: "Example Person",
      company: "Example company",
      image: TestimonialExample,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla perspiciatis vitae suscipit expedita alias voluptates exercitationem assumenda perferendis sequi, ex sint nostrum asperiores. Cum voluptas error veritatis at possimus.",
      name: "Example Person",
      company: "Example company",
      image: TestimonialExample,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla perspiciatis vitae suscipit expedita alias voluptates exercitationem assumenda perferendis sequi, ex sint nostrum asperiores. Cum voluptas error veritatis at possimus.",
      name: "Example Person",
      company: "Example company",
      image: TestimonialExample,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla perspiciatis vitae suscipit expedita alias voluptates exercitationem assumenda perferendis sequi, ex sint nostrum asperiores. Cum voluptas error veritatis at possimus.",
      name: "Example Person",
      company: "Example company",
      image: TestimonialExample,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla perspiciatis vitae suscipit expedita alias voluptates exercitationem assumenda perferendis sequi, ex sint nostrum asperiores. Cum voluptas error veritatis at possimus.",
      name: "Example Person",
      company: "Example company",
      image: TestimonialExample,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla perspiciatis vitae suscipit expedita alias voluptates exercitationem assumenda perferendis sequi, ex sint nostrum asperiores. Cum voluptas error veritatis at possimus.",
      name: "Example Person",
      company: "Example company",
      image: TestimonialExample,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla perspiciatis vitae suscipit expedita alias voluptates exercitationem assumenda perferendis sequi, ex sint nostrum asperiores. Cum voluptas error veritatis at possimus.",
      name: "Example Person",
      company: "Example company",
      image: TestimonialExample,
    },
  ];
  return (
    <Element className="c-testimonials">
      <div className="c-testimonials__inner o-wrapper">
        <h2 className="c-testimonials__inner__title">Testimonials</h2>
        <Swiper
          className="c-testimonials__inner__slider"
          navigation
          pagination={{ clickable: true }}
          modules={[A11y, Navigation, Pagination, Autoplay]}
          spaceBetween={22}
          autoplay={true}
          speed={11000}
          loop={true}
          freeMode={true}
          slidesPerView={"auto"}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 2,
          //   },
          //   1040: {
          //     slidesPerView: 3,
          //   },
          //   1390: {
          //     slidesPerView: 4,
          //   },
          // }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              className="c-testimonials__inner__slider__slide"
              key={index}
            >
              <div className="c-testimonials__inner__slider__slide__quote">
                {testimonial.quote}
              </div>
              <div className="c-testimonials__inner__slider__slide__information">
                <img
                  src={testimonial.image}
                  alt="Testimonial Image"
                  className="c-testimonials__inner__slider__slide__information__img"
                />
                <div className="c-testimonials__inner__slider__slide__information__text">
                  <h3 className="c-testimonials__slider__name">
                    {testimonial.name}
                  </h3>
                  <p className="c-testimonials__slider__job-title">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Element>
  );
};
