import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import maltahomesearch from "../../img/maltahomesearch.PNG";
import samoshibtokenflip from "../../img/samoshibtokenflip.PNG";
import samoshibwebsite from "../../img/samoshibwebsite.PNG";
import bole from "../../img/bole.PNG";

import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { scrollContext } from "../../scrollctx/ctx";
import { useEffect } from "react";
import { useRef } from "react";
const Portfolio = () => {
  const portfolioPosRef = useRef();
  const {setPortfolioPos} = useContext(scrollContext)
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  useEffect(()=>{
    setPortfolioPos(portfolioPosRef.current.offsetTop)
  },[])
  return (
    <div ref={portfolioPosRef} className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://maltahomesearch.vercel.app/" target='_blank'><div className="p-iframe-cover" >
          <div><h2>Open</h2></div>
          </div></a>
          <img src={maltahomesearch} style={{height:'110%',zIndex:'-1'}}/>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://flip.samoshib.com/" target='_blank'><div className="p-iframe-cover" >
          <div><h2>Open</h2></div>
          </div></a>
          <img src={samoshibtokenflip} style={{height:'110%',zIndex:'-1'}}/>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://new-samoshib-website.vercel.app/" target='_blank'><div className="p-iframe-cover" >
          <div><h2>Open</h2></div>
          </div></a>
          <img src={samoshibwebsite} style={{height:'110%',zIndex:'-1'}}/>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.newboletoken.com/" target='_blank'><div className="p-iframe-cover" >
          <div><h2>Open</h2></div>
          </div></a>
          <img src={bole} style={{height:'110%',zIndex:'-1'}}/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
