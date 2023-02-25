import React from "react";

import "./footer.css";
import logo from "../../assets/react-logo.png";

const Footer = () => {
	return (
    	<div className="portfolio__footer section__padding">
			<div className="portfolio__footer-heading">
				<h1 className="gradient__text">Do you want to step into the future before others</h1>
			</div>

			<div className="portfolio__footer-btn">
				<p>Request Early Access</p>
			</div>

			<div className="portfolio__footer-links">
				<div className="portfolio__footer-links_logo">
					<img src={logo} alt="logo" />
					<p>Random Address/Copyright thing</p>
				</div>
				<div className="portfolio__footer-links_div">
					<h3>Links</h3>
					<p>Overons</p>
					<p>Social Media</p>
					<p>Counters</p>
					<p>Contact</p>
				</div>
				<div className="portfolio__footer-links_div">
					<h3>Company</h3>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</div>
				<div className="portfolio__footer-links_div">
					<h3>Get in touch</h3>
					<p>Random Address/</p>
					<p>193-872-1037</p>
					<p>info@payme.com</p>
				</div>
			</div>

			<div className="portfolio__footer-copyright">
				<p>Copyright stuff</p>
			</div>	
		</div>
  	);
}

export default Footer;