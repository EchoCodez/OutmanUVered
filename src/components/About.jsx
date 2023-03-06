import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.thingHeadText} text-white pt-10 pb-3`}>
            <span className='text-[#915EFF]'>OutmaneUVered</span>
        </h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        On October 26, 2022, 19-year old Asad Kaleem was killed in our community of Ashburn, Virginia 
        while he was driving at night. His death was caused by RwD (Roadway Departure) utility pole/tree 
        collision car crash. As our community was grieving over the death of Asad Kaleem, our eCYBERMISSION 
        team decided to do something about it. Over the years, this has become a widespread problem in our 
        society, with the increase of driving vehicles for transportation. Now, it is more important than 
        ever. We pondered sustainable and effective solutions to make utility poles and trees more luminous 
        at night to prevent RwD utility pole/tree collisions car crashes.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Over the years, the fatality rates of accidents in Alexandria, an area near us, 
        have not really changed, despite the number of accidents decreasing. 
        This encouraged us to engineer a solution to ease these those fatality 
        rates instead of trying to stop accidents as a whole. According to the 
        Federal Highway Administration (FWHA), our solution could greatly help 
        prevent roughly  36%, or around 1/3, of RwD accidents. This is because 
        our solution applies to car accidents into trees (19%), poles (6%), 
        barriers (5%), and other fixed objects (6%), all roadside objects that 
        can lichen can be added to. 
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Our eCYBERMISSION project this year is dedicated to Asad Kaleem. 
        Asad, you will be missed. May your soul rest in peace.
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
