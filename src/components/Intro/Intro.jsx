import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import mypic from "../../img/mypic.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import whatsapp from "../../img/whatsapp.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { scrollContext } from "../../scrollctx/ctx";
import { useEffect } from "react";
import { useRef } from "react";
const Intro = () => {
  //ref
  const introRef = useRef()
  // Transition
 
  const transition = { duration: 2, type: "spring" };

  // context
  const {setIntro} = useContext(scrollContext)
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
useEffect(()=>{
  setIntro(introRef.current.offsetTop)
},[])
  return (
    <div ref={introRef} className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Emmanuel Akinroye</span>
          <span>
            Fullstack Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Emma66886" target='_blank'>
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-akinroye-637747171/" target='_blank'>
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://twitter.com/crypto_decrypt" target='_blank'>
          <img src={twitter} alt="" />
          </a>
          <a href="https://wa.me/+2348104742511" target='_blank'>
          <img src={whatsapp} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={mypic} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Fullstack" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
