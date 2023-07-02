import React from 'react'
import { SectionWrapper } from '../hoc'
import { useState } from "react";
import bg from '../assets/footerbg.png'

const Footer = () => {
  return (
    <div>
      <img src={bg} alt='footer' className='w-full h-[100px] object-cover 0' />
    </div>
  )
}
export default Footer
