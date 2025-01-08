import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Gradient from "@/Components/Gradient/Gradient";
import About from "@/Components/About/About";
import Catalog from "@/Components/Catalog/Catalog";
import Star from "@/Components/Star/Star";
import Starfield from "react-starfield";
import Benefit from "@/Components/Benefit/Benefit";
import Corausel from "@/Components/Corausel/Corausel";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Helmet>
                <title>Split TheBill</title>
            </Helmet>
            <Starfield />
            <Navbar />
            <Hero />
            <Gradient />
            <About />
            <Benefit />
            <Corausel />
            <Catalog />
        </div>
    );
};

export default Home;


