import React from "react";
import { motion } from "framer-motion";
import WhatsAppButtonGreenSmall from "../assets/WhatsAppButtonGreenSmall.png";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Amenities = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}></p>
        <h2 className={`${styles.sectionHeadText}`}>Another Section</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Some basic description about the services we provide:
          (this is dummy data)

        </motion.p>
      </div>
      <a href="https://wa.me/918889918884" target="_blank">
        <img src={WhatsAppButtonGreenSmall}/>
      </a>
    </>
  );
};

export default SectionWrapper(Amenities, "");
