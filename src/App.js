import React from "react";

import {Footer, Projects, Achievements, Timeline, Technologies, Header} from "./containers";
import {CTA, Brand, Navbar} from "./components"
import "./App.css"

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Projects />
            <Technologies />
            <Timeline />
            <Achievements />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;