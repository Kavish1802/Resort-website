import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {

  return (
    <div className='flex flex-row flex-wrap justify-center gap-14'>
     {technologies.map((technology) => (
      <div className="Seperator" key={technology.name}>
       <img src={technology.icon} style={{width:"6rem",height:"6rem"}}/>
       <p className="text-white ml-5rem flex">{technology.desc}</p>
      </div>
      ))}

    </div>
  );
};

export default SectionWrapper(Tech, "");

// {technologies.map((technology) => (
//   <div className="w-28 h-28" key={technology.name}>
//     <BallCanvas icon={technology.icon} />
//   </div>
// ))}

