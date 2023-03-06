import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
  return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
		<Tilt
			options={{
			max: 45,
			scale: 1,
			speed: 450,
			}}
			className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
		>
			<div className='relative w-full h-[230px]'>
			<img
				src={image}
				alt='project_image'
				className='w-full h-full object-cover rounded-2xl'
			/>
			</div>

			<div className='mt-5'>
			<h3 className='text-white font-bold text-[24px]'>{name}</h3>
			<p className='mt-2 text-secondary text-[14px]'>{description}</p>
			</div>

			<div className='mt-4 flex flex-wrap gap-2'>
			{tags.map((tag) => (
				<p
				key={`${name}-${tag.name}`}
				className={`text-[14px] ${tag.color}`}
				>
				#{tag.name}
				</p>
			))}
			</div>
		</Tilt>
		</motion.div>
	);
};

const Testing = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
			<h2 className={`${styles.sectionHeadText}`}>Testing</h2>
			</motion.div>

			<div className='w-full flex'>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
			>
				We decided to conduct an experiment to test our design, so we located a tree with fluorescent lichen on it. 
				We conducted our experiment in Broad Run Stream Valley Park, a public park 
				managed by Loudoun County Parks, Recreation and Community Services. 
				To start our experiment, we shone a normal LED flashlight onto the tree. 
				After that, we shone a LED UV flashlight onto the tree from the same place. 
				Lastly, we shone no light onto the tree. Each time a different light was shone 
				upon the tree, we would take a photograph from the same location each time. 
				Then, we conducted a survey showcasing each photograph of the tree, asking which 
				is the most illuminated, and which is the most noticeable while driving. 
				After calculating the poll results, we found that a majority of people believed 
				that the regular flashlight made the tree appeared most illuminated, 
				compared to the UV flashlight and no light. On the contrary, we found that a 
				majority of people believed that UV flashlight made the tree most noticeable, helping 
				drivers see at night, compared to regular light and no light. This means that, while not 
				the best solution to make trees brighter, the UV headlights were helpful for catching 
				people's eyes and potentially prevent RwD car accidents into trees/utility poles by 
				allowing drivers to see in the dark.
			</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7'>
			{projects.map((project, index) => (
				<ProjectCard key={`project-${index}`} index={index} {...project} />
			))}
			</div>
		</>
	);
};

export default SectionWrapper(Testing, "testing");
