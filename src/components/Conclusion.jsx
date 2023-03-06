import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Conclusion = () => {
	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
		>
			<motion.div
			variants={slideIn("left", "tween", 0.2, 1)}
			className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
			>
			<h3 className={styles.sectionHeadText}>Conclusion</h3>
			<p className={styles.sectionSubText}>
				The data we gathered from the poll testing, along with the growing rates of RwD accidents, 
				leads us to believe that our conclusion will be effective if put into use. Our project will 
				allow drivers to see in the dark and help ease the amount of RwD accidents. By putting 
				conclusion on utility poles and trees while also making sure our conclusion works in the forest, 
				we have created a headlight that could illuminate this conclusion and save many lives. Asad Kaleem, 
				along with countless others, have died because of RwD accidents. Our conclusion will hopefully 
				put an end to these accidents, and bring comfort to our community, avenging Asad's death. 
				Today, we continue to hope for peace for our community and Asad. May you rest in peace.
			</p>
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

export default SectionWrapper(Conclusion, "conclusion");
