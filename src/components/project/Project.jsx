import React from "react";

import "./project.css";

const Project = ({imgUrl, date, title}) => {
	return (
    	<div className="portfolio__project-container_project">
			<div className="portfolio__project-container_project-image">
				<img src={imgUrl} alt="project" />
			</div>
			<div className="portfolio__project-container_project-content">
				<div />
				<p>{date}</p>
				<h3>{title}</h3>
				<p>Read Full project</p>
			</div>
		</div>
  	);
}

export default Project;