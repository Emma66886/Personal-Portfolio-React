import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><a href="mailto:emma66886@gmail.com" style={{color:'#fff',textDecoration:'none'}}>Emma66886@gmail.com</a></span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} /> */}
          {/* <Facebook color="white" size={"3rem"} /> */}
          <a href="https://github.com/Emma66886" target='_blank'>
          <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://twitter.com/crypto_decrypt" target='_blank'>
          <Twitter color="white" size={"3rem"} />
          </a>
          <a href="https://wa.me/+2348104742511" target='_blank'>
          <Whatsapp color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-akinroye-637747171/" target='_blank'>
          <Linkedin color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
