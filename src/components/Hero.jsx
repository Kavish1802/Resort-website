import { motion } from "framer-motion";
import videobg from "../assets/video.mp4";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    //video background
    <video autoPlay loop muted playsInline style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '100%', minHeight: '100%' }}>
      <source src={videobg} type="video/mp4" />
    </video>

    
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#964B00]'>The Glamping Groove</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Groove int the wild
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
