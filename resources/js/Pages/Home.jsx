import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
// import Cloud from "@/Components/Cloud/Cloud";
import Gradient from "@/Components/Gradient/Gradient";
import About from "@/Components/About/About";


const Home = () => {
    return <div className="overflow-x-hidden">
        <Navbar/>
        <Hero/>
        {/* <Cloud/> */}
        <Gradient/>
        <About/>
    </div>
};

export default Home;


