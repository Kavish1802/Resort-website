import React from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrowVid from "../assets/right-arrow.mp4";
import rightArrow from "../assets/rightArrow.png";
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
  const Slides = [
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
    </div>,
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
    </>
  );
};

export default SectionWrapper(Experience, "work");
