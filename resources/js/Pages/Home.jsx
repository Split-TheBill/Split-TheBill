import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Gradient from "@/Components/Gradient/Gradient";
import About from "@/Components/About/About";
import Catalog from "@/Components/Catalog/Catalog";
import Star from "@/Components/Star/Star";
import Starfield from "react-starfield";
import Benefit from "@/Components/Benefit/Benefit";
import Corausel from "@/Components/Corausel/Corausel";
import Subscription from "@/Components/Subscription/Subscription";
import Payment from "@/Components/Payment/Payment";
import Footer from "@/Components/Footer/Footer";
import Faq from "@/Components/Faq/Faq";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            AOS.init({
                duration: 1000,
            });
        }
    }, []);
    return (
        <>
            <div className="overflow-x-hidden">
                <Helmet>
                    <title>Split TheBill</title>
                </Helmet>
                <Starfield />
                <Navbar />
                <Hero />
                <About />
                <Benefit />
                <Corausel />
                <Catalog />
                <Subscription />
                <Payment />
                <Faq />
                <Footer />
            </div>
        </>
    );
};

export default Home;
