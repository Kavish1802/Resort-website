import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState } from "react";
import { StarsCanvas } from "./canvas";
import { StayTypes } from "../constants";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

const Experience = () => {
  const SkillRow = {
    width: "50%",
    margin: "100px auto 100px auto",
    textAlign: "left",
    lineHeight: "2",
  }
  const Slides = [
    <div className="flex flex-auto justify-center items-center mt-17 " >
           <div style={{width: "30%",float: "left",marginRight: "30px"}} >
            <img src={StayTypes[0].image} style={{borderRadius:"10rem"}}/>
          </div>
          <div style={SkillRow}>
            <h1 className={`${styles.sectionSubHeadText} text-center`}>
              {StayTypes[0].title}
            </h1>
            <p className={`${styles.sectionSubText} text-center`}>
              {StayTypes[0].points}
            </p>
          </div>
          
    </div>,
    <div className="flex flex-auto justify-center items-center mt-17 ">
          <div style={{width: "30%",float: "left",marginRight: "30px"}} >
            <img src={StayTypes[1].image} style={{borderRadius:"10rem"}}/>
          </div>
          <div style={SkillRow}>
            <h1 className={`${styles.sectionSubHeadText} text-center`}>
              {StayTypes[1].title}
            </h1> 
            <p className={`${styles.sectionSubText} text-center`}>  
              {StayTypes[1].points}
            </p>
          </div>
          
    </div>
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Stays We Offer
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Our Amenities
        </h2>
      </motion.div>
      
      <StarsCanvas />
      <div className="mt-10">
        <AliceCarousel 
          animationDuration={600}
          animationType="fadeout"
          autoPlay={true}
          autoPlayInterval={3000}
          infinite={true}
          keyboardNavigation={true}
        items={Slides}/>
      </div>
     {/* <div className="grid grid-flow-col grid-cols-2 gap-8">
     <div className="flex flex-auto justify-center items-center mt-17 ">
          <div>
            <h1 className={`${styles.sectionSubHeadText} text-center`}>
              {StayTypes[0].title}
            </h1>
            <p className={`${styles.sectionSubText} text-center`}>
              {StayTypes[0].points}
            </p>
          </div>
          <div >
            <img src={StayTypes[0].image} style={{height:"20rem", width:"20rem" ,left:"rem" , marginTop:"30px",borderRadius:"10px"}}/>
          </div>
    </div>
        <div className="flex flex-auto justify-center items-center mt-17 ">

          <div>
            <h1 className={`${styles.sectionSubHeadText} text-center`}>
              {StayTypes[1].title}
            </h1> 
            <p className={`${styles.sectionSubText} text-center`}>  
              {StayTypes[1].points}
            </p>
          </div>
          <div >
            <img src={StayTypes[1].image} style={{height:"20rem", width:"20rem" ,left:"rem" , marginTop:"30px",borderRadius:"10px"}}/>
          </div>
    </div>
     </div> */}
    {/* <div className="flex font-sans mt-20">
       <div className="flex-none w-48 relative">
         <img src={StayTypes[0].image} className="absolute inset-0 w-full h-full object-cover " loading="lazy" />
       </div>

       
       <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className={`flex-auto ${styles.sectionSubHeadText} text-slate-200`}>
           {StayTypes[0].title}
          </h1>
          <div class="text-lg font-semibold text-slate-00">
            ₹8000.00
          </div>
        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
          In stock
        </div>
    </div>
    
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
    </form>
    </div> */}
    </>
  );
};

export default SectionWrapper(Experience, "work");
