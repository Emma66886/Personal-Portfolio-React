import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import maltahomesearch from "../../img/maltahomesearch.PNG";
import samoshibtokenflip from "../../img/samoshibtokenflip.PNG";
import samoshibwebsite from "../../img/samoshibwebsite.PNG";
import bole from "../../img/bole.PNG";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { scrollContext } from "../../scrollctx/ctx";
import { useEffect } from "react";
import { useRef } from "react";
import portfolioitems from "./portfolioitems";
const Portfolio = () => {
  const portfolioPosRef = useRef();
  const { setPortfolioPos } = useContext(scrollContext);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    setPortfolioPos(portfolioPosRef.current.offsetTop);
  }, []);
  return (
    <div ref={portfolioPosRef} className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        slidesPerView={
          window.innerWidth > 1100 ? 3 : window.innerWidth > 750 ? 2 : 1
        }
        grabCursor={true}
        className="portfolio-slider"
      >
        {portfolioitems.map((v, index) => (
          <SwiperSlide key={index + "portfolionin"}>
            <div className="portfolio-itemwrapper">
              <img
                src={v.image}
                // style={{ height: "110%", zIndex: "-1" }}
              />
              <h3>{v.name}</h3>
              <a href={v.link} target="_blank">
                <button>VIEW LIVE</button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
