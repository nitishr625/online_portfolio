import React from "react";
import "./Testimonials.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const testimonials = [
  {
    avatar:
      "https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_1280.png",
    name: "user1",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
    tenetur. Voluptatem voluptas quo fugiat inventore consequatur ad
    architecto minima expedita debitis reiciendis et sed amet,
    consectetur, accusantium unde. Autem, obcaecati.`,
  },

  {
    avatar: "http://cdn.onlinewebfonts.com/svg/img_4741.png",
    name: "user2",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
    tenetur. Voluptatem voluptas quo fugiat inventore consequatur ad
    architecto minima expedita debitis reiciendis et sed amet,
    consectetur, accusantium unde. Autem, obcaecati.`,
  },

  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPsRD3eL3ZRUbHVNgd3vsuLOaHNkTzQK4bQ&usqp=CAU",
    name: "user3",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
    tenetur. Voluptatem voluptas quo fugiat inventore consequatur ad
    architecto minima expedita debitis reiciendis et sed amet,
    consectetur, accusantium unde. Autem, obcaecati.`,
  },
];
function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
