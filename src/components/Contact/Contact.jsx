import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { scrollContext } from "../../scrollctx/ctx";
import { useEffect } from "react";
const Contact = () => {
  const {setContactPos} = useContext(scrollContext)
  const contactPosRef = useRef()
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")
    // console.log(form.current.user_name.value)
    if(name === "" || email === "" || message === "") {
      setError("All fields must be filled") 
      setTimeout(()=>setError(""),3600)
      return 
    }
    emailjs
      .sendForm(
        "service_ld4yv2o",
        "template_egqikye",
        form.current,
        "6ICvi4LvUtUIJ3vOX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          setName("")
          setEmail("")
          setMessage("")
          setTimeout(()=>setDone(false),3600)
          setIsLoading(false)
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false)
          setError("An error occured please check your network")
          setTimeout(()=>setError(""),3600)
        }
      );
  };
    useEffect(()=>{
      setContactPos(contactPosRef.current.offsetTop)
    },[])
  return (
    <div ref={contactPosRef} className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" onChange={e=>setName(e.target.value)} className="user"  placeholder="Name"/>
          <input type="email" name="user_email" onChange={e=>setEmail(e.target.value)} className="user" placeholder="Email"/>
          <textarea name="message" onChange={e=>setMessage(e.target.value)} className="user" placeholder="Message"/>
          <input type="submit" disabled={isLoading} value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <span style={{color:'#ff0000'}}>{error && error}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
