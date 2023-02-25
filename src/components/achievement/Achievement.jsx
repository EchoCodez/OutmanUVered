import React from "react";

import "./achievement.css";

const Achievement = ({title, text}) => {
  	return (
    	<div className="portfolio__achievements-container_achievement">
            <h1>{title}</h1>
			<p>{text}</p>
        </div>
  	);
}

export default Achievement;