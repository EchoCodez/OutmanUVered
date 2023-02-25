import React from "react";
import {Feature} from "../../components";

import "./timeline.css";

const featuresData = [
	{
		title: "2020",
		text: "I started off by learning python and am still using it today. Afterwards, I applied my skills to Java programming and leaned to make Minecraft Mods.",
	},
	{
		title: "2021",
		text: "I used my knowledge of basic back end programming to create multiple apps using frameworks such as Django and React. I also continued Game Development and made 2D games through pygame.",
	},
	{
		title: "2022",
		text: "To continue my journey, I thouroughly learned React and front end development. I also made more complicated games in pygame and started my quest through Unity.",
	},
]

const Timeline = () => {
	return (
    	<div className="portfolio__features section__padding" id="timeline">
			<div className="portfolio__features-heading">	
				<h1 className="gradient__text">Timeline</h1>
				<p>This is my three year programming journey.
					I was interested in both Web and Game Development, and did both for a while. 
					I was able to efficiently use React to make websites and use python for back end and Game Development. 
					I also learned many other frameworks and languages, such as Next js and C# for the Unity game engine</p>
			</div>
			<div className="portfolio__features-container">
				{featuresData.map((item, index) => (
					<Feature title={item.title} text={item.text} key = {item.title + index}/>
				))}
			</div>
		</div>	
  	);
}

export default Timeline;