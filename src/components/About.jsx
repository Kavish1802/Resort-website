 import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import AliceCarousel from "react-alice-carousel";
import './About.css'



const ServiceCard = ({ index, title, image }) => (

  
  // <Tilt className='xs:w-[250px] w-full'>
  // <div>
  //   <div
  //     // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  //     className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  //   >
  //     <div
  //       options={{
  //         max: 45,
  //         scale: 1,
  //         speed: 450,
  //       }}
  //       className='bg-tertiary rounded-[20px] py-2 px-2 min-h-[280px] flex justify-evenly items-center flex-col'
  //     >
      
  //       <img
  //         src={image}
  //         alt='web-development'
  //         className="w-100% h-100% display: block; margin-left: auto; margin-right: auto;"
  //       />

  //      
  //     </div>
  //   </div>
  //   </div>
  // </Tilt>
  <div>
    <div className="flip-card" style={{marginTop:'2rem',width:"16rem",height:"18rem"}} >
     <div className="flip-card-inner">
        <div className="flip-card-front carousel" >
         <img
           src={image}
           alt='web-development'
           //className="w-100% h-100% display:block margin-left:auto margin-right:auto;"
         />
          <h3 className='text-white text-[25px] font-bold text-center'>
           {title}
          </h3>
        </div>
        <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>Leave Me</p>
        </div>
     </div>
    </div>
  </div>
);

const About = () => {
  const Slidess = [];
  for(let i=0;i<services.length;i++){
    Slidess.push(<ServiceCard key={services[i].title} index={i} {...services[i]} />)
  }
  const responsive = {
    0: { items: 1 },
    420:{items:2},
    780:{items: 3},
    1024: { items: 4 },
  };
  console.log(Slidess)
  return (
    <div  >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       Spread across an area of 8 acres in the heart of Lush green Choral Valley 
       we offer luxurious stays in the lap of nature . Located just 40 mins away 
       from Indore , enjoy a scenic drive on the meardering road throught the 
       dense jungles of choral .
      </motion.p>
      
      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
      <AliceCarousel style={{marginTop:'2rem'}}
        mouseTracking
        items={Slidess}
        animationDuration={600}
        animationType="fadeout"
        autoPlay={true}
        autoPlayInterval={3000}
        infinite={true}
        keyboardNavigation={true}
        responsive={responsive}
      />
       
    </div>
  );
};

export default SectionWrapper(About, "about");
