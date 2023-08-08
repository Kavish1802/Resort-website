import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {

  return (
    <div className='flex flex-row flex-wrap justify-center gap-14'>
     {/* {technologies.map((technology) => (
      <div className="Seperator" key={technology.name}>
       <img src={technology.icon} style={{width:"6rem",height:"6rem"}}/>
       <p className="text-white ml-5rem flex">{technology.desc}</p>
      </div>
      ))} */}
      {/* <div style="width: 100%"> */}
      <iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=The%20Glamping%20Grove,%20Sendal,%20Madhya%20Pradesh+(The%20Glamping%20Grove)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a>
      </iframe>
      {/* </div> */}
    </div>
  );
};

export default SectionWrapper(Tech, "");

// {technologies.map((technology) => (
//   <div className="w-28 h-28" key={technology.name}>
//     <BallCanvas icon={technology.icon} />
//   </div>
// ))}

