import React from "react";

import "./header.css";
import compooter from "../../assets/compooter.png"

const Header = () => {
    return (
        <div className="portfolio__header section__padding" id="home">
            <div className="portfolio__header-content">
                <div className="portfolio__header-content__title">
                    <h1 className="gradient__text">Hello, my name is Mihir</h1>
                </div>
                <p>Welcome to my personal portfolio. I am a programmer with a deep understanding of coding.
                    I am proficient in python and know many other languages. I am also a frontend developer
                    and mainly use react for web development. On the side, I like to do game development in
                    python and unity as well.</p>

                <div className="portfolio__header-content__input">
                    <input type="search" placeholder="Search Portfolio..." />
                    <button type="button">Learn More</button>
                </div>
            </div>
            <div className="portfolio__header-image">
                <img src={compooter} alt="compooter" />
            </div>
        </div>
    );
}

export default Header;