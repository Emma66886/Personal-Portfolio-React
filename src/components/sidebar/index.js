import React, { useContext } from 'react'
import styles from './sidebar.module.css'
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFolderOpen,
  } from "react-icons/ai";
  import { IoSchoolOutline } from "react-icons/io5";
  import { RiCustomerServiceLine } from "react-icons/ri";
  import { MdOutlineMessage } from "react-icons/md";
  import { Link, LinkProps,ScrollLink } from "react-scroll";
import { scrollContext } from '../../scrollctx/ctx';
function Sidebar() {
    const {currentSection} = useContext(scrollContext)
  return (
    <div className={styles.sidebarWrapper}>
        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
        <div className={styles.item +" " +`${currentSection === "nav" && styles.addOgrangecolor} `}>
            <AiOutlineHome />
        </div>
        </Link>
        <Link activeClass="active" to="Intro" spy={true} smooth={true}>
        <div className={styles.item +" " +`${currentSection === "Intro" && styles.addOgrangecolor} `}>
            <AiOutlineUser />
        </div>
        </Link>
        <Link activeClass="active" to="services" spy={true} smooth={true}>
        <div className={styles.item +" " +`${currentSection === "service" && styles.addOgrangecolor} `}>
            <RiCustomerServiceLine />
        </div>
        </Link>
        <Link activeClass="active" to="experience" spy={true} smooth={true}>
        <div className={styles.item +" " +`${currentSection === "experience" && styles.addOgrangecolor} `} >
            <IoSchoolOutline />
        </div>
        </Link>
        <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
        <div className={styles.item +" " +`${currentSection === "portfolio" && styles.addOgrangecolor} `}>
            <AiOutlineFolderOpen />
        </div>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>
        <div className={styles.item +" " +`${currentSection === "contact" && styles.addOgrangecolor} `}>
            <MdOutlineMessage />
        </div>
        </Link>
    </div>
  )
}

export default Sidebar