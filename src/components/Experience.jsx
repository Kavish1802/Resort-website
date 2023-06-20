import React from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrowVid from "../assets/right-arrow.mp4";
import rightArrow from "../assets/rightArrow.png";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState } from "react";
import { StarsCanvas } from "./canvas";
import { StayTypes } from "../constants";


const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gotonext = () => {
    if(currentIndex < StayTypes.length - 1){
      setCurrentIndex(currentIndex + 1);
    }
    else {
      setCurrentIndex(0);
    }

  }
  const gotoprev = () => {
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
    }
    else 
    {
      setCurrentIndex(StayTypes.length - 1);
    }

  }
  const carousel = (data) => {
    return (
      <div className="flex flex-auto justify-center items-center mt-17 ">
         <div >
          <img src={data.image} style={{height:"20rem", width:"20rem" ,left:"rem" , marginTop:"30px"}}/>
        </div>
              <h1 className={`${styles.sectionSubHeadText} text-center`}>
                {data.title}
              </h1>
              <p className={`${styles.sectionSubText} text-center`}>
                {data.points}
              </p>
      </div>
    )};
     
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


     <div className="flex justify-center">
        <StarsCanvas />
        <div onClick={gotonext}>
          <img src={leftArrow} style={{height:"3rem", width:"3rem", marginTop:"5rem",top: "50%",
                 position: "absolute",top: "50%",transform: "translate(0, -50%)",left: "32px",fontSize: "45px",zIndex: 1, cursor: "pointer",}}/>
        </div>
        <div onClick={gotoprev}>
          <img src={rightArrow} style={{height:"3rem", width:"3rem", marginTop:"5rem",top: "50%",
                        position: "absolute",top: "50%",transform: "translate(0, -50%)",right: "32px",fontSize: "45px",color: "#fff",zIndex: 1,cursor: "pointer",}}/>
        </div>

        <div>
        {/* {StayTypes.map((data, index) => ( 
          <div key={index} className=" bg-tertiary rounded-[20px] py-2 px-2 min-h-[280px] flex flex-auto justify-evenly items-center ">
            <div >
              <img src={data.image} style={{height:"20rem", width:"20rem" ,left:"rem" , marginTop:"30px"}}/>
            </div>
              <h1 className={`${styles.sectionSubHeadText} text-center`}>
                {data.title}
              </h1>
              <p className={`${styles.sectionSubText} text-center`}>
                {data.points}
              </p>
          </div>
        ))} */}

          {carousel(StayTypes[currentIndex])}
        </div>
     </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
