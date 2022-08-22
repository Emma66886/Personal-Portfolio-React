import { createContext, useEffect, useState } from "react";

export const scrollContext = createContext({
    currentSection:'',
    setServicesPos:(val)=>{},
    setExperiencePos:(val)=>{},
    setPortfolioPos:(val)=>{},
    setContactPos:(val)=>{},
    setIntro:(val)=>{}
});

export default function ScrollCtx({children}){
    const [scrrolValue,setScrollValue] = useState(0);
    const [currentSection,saveCurrentSection] = useState('nav');
    const [navPos,saveNavePos] = useState(0);
    const [servicePos,saveServicePos] = useState(0);
    const [experiencePos,saveExpPos] = useState(0);
    const [portfolioPos,savePortfolioPos] = useState(0);
    const [contactPos,saveCOntactPos] = useState(0);
    const [introPos,saveIntroPos] = useState(0);
    const handleCurrentSection =()=>{
        // if(scrrolValue === 0)saveCurrentSection('nav');
        if(scrrolValue >= 0 && scrrolValue < introPos)saveCurrentSection('nav');
        if(scrrolValue >= introPos && scrrolValue < servicePos)saveCurrentSection('Intro');
        if(scrrolValue >= servicePos && scrrolValue < experiencePos)saveCurrentSection('service');
        if(scrrolValue >= experiencePos && scrrolValue < portfolioPos)saveCurrentSection('experience');
        if(scrrolValue >= portfolioPos && scrrolValue < contactPos)saveCurrentSection('portfolio');
        if(scrrolValue >= contactPos )saveCurrentSection('contact');

    }
    const handleScroll=()=>{
        setScrollValue(window.pageYOffset)
        handleCurrentSection()
    }
    useEffect(()=>{
    window.addEventListener('scroll', handleScroll, { passive: true });
    // console.log(window.pageYOffset)
    handleCurrentSection()
    },[scrrolValue])
    useEffect(()=>{
        handleCurrentSection()
    },[])
    
    const handleServicePos=(val)=>{
        saveServicePos(val -10)
    }
    const handleExperiencePos=(val)=>{
        saveExpPos(val -10)
    }
    const handlePortfolioPos=(val)=>{
        savePortfolioPos(val-10)
    }
    const handleContactPos=(val)=>{
        saveCOntactPos(val-10)
    }
    const handleIntroPos =(val)=>{
        saveIntroPos(val-10)
    }
    const myCtxVal = {
    currentSection:currentSection,
    setServicesPos:handleServicePos,
    setExperiencePos:handleExperiencePos,
    setPortfolioPos:handlePortfolioPos,
    setContactPos:handleContactPos,
    setIntro:handleIntroPos
    }
    return <scrollContext.Provider value={myCtxVal} >{children}</scrollContext.Provider>
}