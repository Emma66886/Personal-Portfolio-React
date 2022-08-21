import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { useContext } from "react";
import { scrollContext } from "../../scrollctx/ctx";

const Testimonial = () => {
  const clients = [
    {
      id: 1,
      name: "Taiwo Oluwaseyi",
      img: profilePic1,
      review:
        "He completed my project before the deadline I gave him, good job dude... Really professional in talking and doing, now that's what you call a full stack developer, lol... Keep up the great work.",
    },
    {
      id: 2,
      name: "Babalola Dolapo",
      img: profilePic2,
      review:
        "Incredible work delivered quickly. He took the description I gave Him, and delivered exactly what I was looking for. 100% would recommend His work.",
    },
    {
      id: 3,
      name: "Akinroye Emmanuel",
      img: profilePic3,
      review:
        "Emmanuel, completed a large application in about one month. I had many devs working on this project and no one was capable of completing it, but Akinola did. He is very trustfull and definitely the greatest dev I've ever met. Hire him, you'll be in good hands!",
    },
    {
      id: 4,
      name: "Olawoore Taiwo",
      img: profilePic4,
      review:
        " Great work, highly impressed by the work you have put and I appreciate your efforts. Sure would love to work in future.",
    },
  ];
// const {} = useContext(scrollContext)
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
