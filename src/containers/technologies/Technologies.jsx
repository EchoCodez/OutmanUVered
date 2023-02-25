import React from "react";
import {Feature} from "../../components";
import front_end from "../../assets/react.png";
import back_end from "../../assets/python.png";
import game_dev from "../../assets/unity.png";

import "./technologies.css";

const Technologies = () => {
	return (
    	<div className="portfolio__technologies section__margin" id="technologies">
			<div className="portfolio__technologies-heading">
				<div />
				<h1>Technologies</h1>
				<p>I have worked with a range of technologies. I am experienced with both front and back end, and like to do game development</p>
			</div>
			<div className="portfolio__technologies-container">
				<div>
					<img src={front_end} alt="react logo" />
					<Feature title="Front End" text="I am mostly experienced in front end development and am good at React. I have also used Next js and Flutter. " />
				</div>
				<div>
					<img src={back_end} alt="python logo" />
					<Feature title="Back End" text="I am extremely profiecient in python and know many other coding languages. I have also used sanity in the past." />
				</div>
				<div>
					<img src={game_dev} alt="unity lgog" />
					<Feature title="Game Development" text="On the side, I also like to create games. I mainly use pygame in python but am also able to use Unity." />
				</div>
			</div>
		</div>
  	);
}

export default Technologies;