import React, {useState} from "react";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";

import logo from "../../assets/react-logo.png";
import github from "../../assets/github.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";

import "./navbar.css";

const Menu = () => (
	<>
	<p><a href="#home">Home</a></p>
	<p><a href="#projects">Projects</a></p>
	<p><a href="#technologies">Technologies</a></p>
	<p><a href="#timeline">Timeline</a></p>
	<p><a href="#achievements">Achievements</a></p>
	</>
)

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

  	return (
		<div className="portfolio__navbar">
			<div className="portfolio__navbar-links">
				<div className="portfolio__navbar-links_logo">
					<img src={logo} alt="logo"/>
				</div>
				<div className="portfolio__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="portfolio__navbar-contacts">
				<div className="portfolio__navbar-contacts_github">
					<a href="https://github.com">
						<img src={github} alt="github" />
					</a>
				</div>
				<div className="portfolio__navbar-contacts_discord">
					<a href="https://discord.com/">
						<img src={discord} alt="discord" />
					</a>
				</div>
				<div className="portfolio__navbar-contacts_twitter">
					<a href="https://twitter.com">
						<img src={twitter} alt="twitter" />
					</a>
				</div>
			</div>
			<div className="portfolio__navbar-menu">
				{toggleMenu
					? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
					: <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
				}
				{toggleMenu && (
					<div className="portfolio__navbar-menu_container scale-up-center">
						<div className="portfolio__navbar-menu_container-links">
							<Menu />
							<div className="portfolio__navbar-menu_container-links-sign">
								<p>Log in</p>
								<button type="button">Sign up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
  	);
}

export default Navbar;