import React from "react";
import Achievement from "../../components/achievement/Achievement";

import "./achievements.css";

const Achievements = () => {
	return (
    	<div className="portfolio__achievements section__padding">
			<div className="portfolio__achievements-heading">
				<h1 className="gradient__text__achievements">Achievements</h1>
			</div>
			<div className="portfolio__achievements-container">
				<Achievement title="20+" text="Open Source Projects"/>
				<Achievement title="1000+" text="Students" />
				<Achievement title="1900+" text="Github Followers" />
				<Achievement title="5000+" text="Github Stars" />
			</div>
		</div>
  	);
}

export default Achievements;