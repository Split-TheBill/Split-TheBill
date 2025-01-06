import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
// import Cloud from "@/Components/Cloud/Cloud";
import Gradient from "@/Components/Gradient/Gradient";
import About from "@/Components/About/About";
import Catalog from "@/Components/Catalog/Catalog";
import Star from "@/Components/Star/Star";
import Starfield from "react-starfield";
import Benefit from "@/Components/Benefit/Benefit";
import Corausel from "@/Components/Corausel/Corausel";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Starfield />
            <Navbar />
            <Hero />
            {/* <Cloud/> */}
            <Gradient />
            <About />
            <Benefit />
            <Corausel />
            <Catalog/>
        </div>
    );
};

export default Home;


