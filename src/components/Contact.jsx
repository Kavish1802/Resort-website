import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/WhatsAppLogo.png"
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import axios from 'axios';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    startdate:new Date(),
    enddate:new Date(),
    cottage:false,
    glamp:false,
    contact:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(name,value);
    
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form submission started.');
      console.log(form);
      const response =await axios.post('https://perfect-parka-ant.cyclic.app/api/users',form);
      console.log('Response:', response.data);
      console.log('Form submitted and data stored in the database');

      const { name, contact,cottage,startdate,enddate,glamp } = form;
      const message = `Hi, I'm ${name} and I wanted to book a ${cottage?"cottage":" "} ${glamp?"glamping nest":""}. From the date ${startdate} to ${enddate}. Please contact me at ${contact}`;
      const url = `https://api.whatsapp.com/send?phone=+918889918884x&text=${message}`;
      window.open(url, "_blank");
    } catch (error) {
      console.error('Error storing data:', error.message);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, contact,cottage,starttDate,enddDate,glamp } = form;
  //   const message = `Hi, I'm ${name} and I wanted to book a ${cottage?"cottage":" "} ${glamp?"glamping nest":""}. From the date ${starttDate} to ${enddDate}. Please contact me at ${contact}`;
  //   const url = `https://api.whatsapp.com/send?phone=+918889918884x&text=${message}`;
  //   window.open(url, "_blank");
  // };
  const openLoaction = () => {
     const url="https://goo.gl/maps/kGTy4HzkHdWcqbZz6";
     const response = confirm("Do you want to open the location in google maps?");
     if(response){
      window.open(url,"_blank");
     }
     else return;
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Chat on WhatsApp for Bookings</p>
        <p style={{color:"red"}}> If you are veiwing this site on Desktop ,</p>
         <p style={{color:"red"}}>then make sure you have whatsapp web or app</p>
        <h3 className={styles.sectionSubHeadText}>Contact for Bookings</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Contact Number</span>
            <input
              type='contact'
              name='contact'
              value={form.contact}
              onChange={handleChange}
              placeholder="What's your Contact number?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>


         <label className='flex flex-col'>

            <span className='text-white font-medium mb-4'>Select the type of Stay</span>
            <div className='flex items-center gap-4'>
              <input
                type='checkbox'
                name='cottage'
                value={form.cottage}
                onChange={()=>{setForm({...form,glamp:!form.cottage})}}
                className='h-6 w-6 rounded-lg border-none outline-none'
              />
              <span className='text-white font-medium'>
                Book a cottage
              </span>
            </div>
            <span className='text-white font-small py-2'>OR</span>
            <div className='flex items-center gap-4'>
              <input
                type='checkbox'
                name='glamp'
                value={form.glamp}
                onChange={()=>{setForm({...form,glamp:!form.glamp})}}
                className='h-6 w-6 rounded-lg border-none outline-none'
              />
              <span className='text-white font-medium'>
                Book a glamping Nest
              </span>
            </div>
         </label>

          <label className='flex flex-col'>
             <span className='text-white font-medium mb-4'>Select Date </span>
              <div className="flex flex-row gap-4">
                <input
                  type='date'
                  name='startdate'
                  value={form.startdate}
                  onChange={handleChange}
                  placeholder="Start Date"
                  className='bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none '
                />
                <input
                  type='date'
                  name='enddate'
                  value={form.enddate}
                  onChange={handleChange}
                  placeholder="End Date"
                  className='bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none'
                />
              </div>
          </label>


          <button
            type='submit'
            className='bg-tertiary py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary grid -cols-1 sm:grid-cols-2 gap-2'
          >
            Send Message <img src={Logo} alt="logo" className="w-6 h-6 ml-2"/>
          </button>
        </form>
      </motion.div>

      <motion.div 
        onClick={openLoaction}
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >    
          <EarthCanvas  />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

// grid -cols-1 sm:grid-cols-2 gap-14 max-w-screen-lg