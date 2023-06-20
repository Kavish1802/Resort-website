import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/WhatsAppLogo.png"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    cottage:false,
    starttDate:new Date(),
    enddDate:new Date(),
    glamp:false,
    contact:"",
  });
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    //send message on whatsapp
    e.preventDefault();
    const { name, contact,cottage,starttDate,enddDate,glamp } = form;
    const message = `Hi, I'm ${name} and I wanted to book a ${cottage?"cottage":" "} ${glamp?"glamping nest":""}. From the date ${starttDate} to ${enddDate}. Please contact me at ${contact}`;
    const url = `https://api.whatsapp.com/send?phone=+918889918884x&text=${message}`;
    window.open(url, "_blank");
  };

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
              placeholder="What's your good name?"
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
                onChange={handleChange}
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
                onChange={handleChange}
                className='h-6 w-6 rounded-lg border-none outline-none'
              />
              <span className='text-white font-medium'>
                Book a glamping Nest
              </span>
            </div>
         </label>

          <label className='flex flex-col'>
             <span className='text-white font-medium mb-4'>Select Date with another method</span>
              <div className="flex flex-row gap-4">
                <input
                  type='date'
                  name='starttDate'
                  value={form.starttDate}
                  onChange={handleChange}
                  placeholder="Start Date"
                  className='bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none '
                />
                <input
                  type='date'
                  name='enddDate'
                  value={form.enddDate}
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
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

// grid -cols-1 sm:grid-cols-2 gap-14 max-w-screen-lg