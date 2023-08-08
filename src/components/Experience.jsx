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
<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
 <a href="#!">
  <img
   className="rounded-t-lg"
   src={StayTypes[0].image}
   alt="" />
</a>
<div className="p-6">
  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    {StayTypes[0].title}
  </h5>
  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    {StayTypes[0].points}
  </p>
  <button
    type="button"
    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    data-te-ripple-init
    data-te-ripple-color="light">
     Button
  </button>
</div>
</div>
</div>,
<div className="flex flex-auto justify-center items-center mt-17 px-2rem ">
     <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
 <a href="#!">
  <img
   className="rounded-t-lg"
   src={StayTypes[0].image}
   alt="" />
</a>
<div className="p-6">
  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    {StayTypes[1].title}
  </h5>
  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    {StayTypes[1].points}
  </p>
  <button
    type="button"
    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    data-te-ripple-init
    data-te-ripple-color="light">
     Button
  </button>
</div>
</div>
</div>
  ]

  
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
    </>
  );
};

export default SectionWrapper(Experience, "work");
{/* <div className="flex flex-auto justify-center items-center mt-17 " >
<div style={{width:"40%",float: "left",marginRight: "30px"}} >
 <img src={StayTypes[0].image} style={{width: "100%"}}/>
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
<div style={{width: "40%",float: "left",marginRight: "30px"}} >
 <img src={StayTypes[1].image} style={{width: "100%"}}/>
</div>
<div style={SkillRow}>
 <h1 className={`${styles.sectionSubHeadText} text-center`}>
   {StayTypes[1].title}
 </h1> 
 <p className={`${styles.sectionSubText} text-center`}>  
   {StayTypes[1].points}
 </p>
 
</div> 
</div> */}


