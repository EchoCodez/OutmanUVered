import React from "react";
import {Project} from "../../components";
import {blog01, blog02, blog03, blog04, blog05} from "./imports";

import "./projects.css";

const Projects = () => {
	return (
    	<div className="portfolio__projects section__padding" id="projects">
			<div className="portfolio__projects-heading">
				<h1 className="gradient__text__projects">Projects</h1>
			</div>
			<div className="portfolio__projects-container">
				<div className="portfolio__projects-container_groupA">
					<Project imgUrl={blog01} date="Sep 26, 2021" title="This is the title for this article" />
				</div>
				<div className="portfolio__projects-container_groupB">
					<Project imgUrl={blog02} date="Sep 26, 2021" title="This is the title for this article" />
					<Project imgUrl={blog03} date="Sep 26, 2021" title="This is the title for this article" />
					<Project imgUrl={blog04} date="Sep 26, 2021" title="This is the title for this article" />
					<Project imgUrl={blog05} date="Sep 26, 2021" title="This is the title for this article" />
				</div>
			</div>
		</div>
  	);
}

export default Projects;