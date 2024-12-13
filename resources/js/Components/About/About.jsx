import React from "react";
import HeroImg from "../../../../public/images/aboutus.svg";

const About = () => {
    const clouds = Array(4).fill("images/Awan_Section.svg");

    return (
        <>
            <section className="relative top-[-400px]">
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                    <div className="flex justify-center items-center">
                        <img
                            src={HeroImg}
                            alt="Hero"
                            className="w-full max-w-[350px] md:max-w-[400px]"
                        />
                    </div>

                    <div className="flex flex-col justify-center py-14 md:py-0">
                        <div className="text-center md:text-left space-x-6 font-lexend mx-4 md:ml-[80px]">
                            <h1 className="text-white text-4xl font-bold lg:text-5xl leading-relaxed xl:leading-normal relative bottom-[50px]">
                                Tentang Kami
                            </h1>
                            <p className="text-white xl:max-w-[500px] mx-auto md:mx-0 relative left-[-21px] font-light">
                                Split The Bill hadir untuk memudahkan Anda
                                menikmati akun premium favorit tanpa harus
                                menguras kantong! Dengan sistem pembelian
                                patungan yang aman dan transparan, kami
                                memberikan akses praktis ke layanan premium
                                dengan harga yang jauh lebih terjangkau.
                                Bergabunglah bersama kami dan rasakan cara baru
                                yang lebih hemat untuk menikmati pengalaman
                                premium!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative h-[400px] bottom-[300px]">
                {/* Awan Horizontal (Atas) */}
                <div className="absolute top-[-170px] w-full flex justify-center">
                    {clouds.map((cloud, index) => (
                        <img
                            key={index}
                            src={cloud}
                            alt="Cloud"
                            className={`w-[500px] h-auto ${
                                index % 2 !== 0 ? "transform scale-x-[-1]" : ""
                            }`}
                        />
                    ))}
                </div>

                {/* Awan Horizontal (Bawah, Flip Vertikal) */}
                <div className="absolute bottom-[172px] w-full flex justify-center">
                    {clouds.map((cloud, index) => (
                        <img
                            key={`vertical-${index}`}
                            src={cloud}
                            alt="Cloud Flipped Vertically"
                            className={`w-[500px] h-auto ${
                                index % 2 !== 0
                                    ? "transform scale-x-[-1] scale-y-[-1]"
                                    : "transform scale-y-[-1]"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;
