import React, { useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { themeContext } from "../../Context";
import { scrollContext } from "../../scrollctx/ctx";
import "./Experience.css";
const Experience = () => {
  const experienceRef = useRef()
  const {setExperiencePos} = useContext(scrollContext)
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
useEffect(()=>{
  setExperiencePos(experienceRef.current.offsetTop)
},[])
  return (
    <div ref={experienceRef} className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>10+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
