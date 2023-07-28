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
