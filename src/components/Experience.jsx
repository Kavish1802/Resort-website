import React from "react";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import Tilt from "react-tilt";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import cottage from "../assets/cabbana.png"
import glamp from "../assets/stingraystacks.png"


// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date="1-2 word tagline here"
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-[60%] h-[60%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//            <img src={experience.image} alt={experience.company_name} className="w-full flex"/> 
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

const Experience = () => {
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

       <div className="grid -cols-1 sm:grid-cols-2 gap-14 max-w-screen-lg">
        <div className="borde">
          <img src={cottage} style={{height:"30rem", width:"30rem", marginTop:"5rem"}}/>
            <h2 className="text-4xl text-center text-white mt-5">Cabbana Cottage</h2>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
            <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                1 Queen Bed
              </li> 
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                1 Sofa Bed
              </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                1 Bathroom
              </li>
            </ul>
        </div>


        <div className="glamp">
          <img src={glamp} style={{height:"30rem", width:"30rem",marginTop:"5rem"}}/>
            <h2 className="text-4xl text-center text-white mt-5">Glamping Nest</h2>
        </div>
       </div>
     </div>
      {/* <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div> */}


    
    </>
  );
};

export default SectionWrapper(Experience, "work");
