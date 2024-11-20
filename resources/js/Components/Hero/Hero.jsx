import React from "react";
import HeroImg from "../../../../public/images/hero.svg";

const Hero = () => {
    const clouds = Array(4).fill("images/Awan_Section.svg");

    return (
        <>
            <section className="relative top-[-150px]">
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                    {/* Split TheBill desc */}
                    <div className="flex flex-col justify-center py-14 md:py-0">
                        <div className="text-center md:text-left space-y-6 font-lexend ml-[90px]">
                            <h1 className="text-white text-4xl font-bold lg:text-5xl leading-relaxed xl:leading-normal">
                                Selamat Datang di Split TheBill!
                            </h1>
                            <p className="text-white xl:max-w-[500px]:">
                                Platform terbaik untuk berbagi langganan layanan
                                applikasi premium. Dengan kami, Anda bisa
                                berbagi langganan dengan aman, legal, dan
                                pastinya lebih hemat. Bergabunglah sekarang dan
                                rasakan kemudahan serta keamanan yang kami
                                tawarkan! Hemat lebih banyak, nikmati lebih
                                lama!
                            </p>
                        </div>
                    </div>
                    {/* Ilustrasi */}
                    <div className="flex justify-center items-center ml-[100px]">
                        <img src={HeroImg} alt="" className="w-[450px]" />
                    </div>
                </div>
            </section>

            <div className="relative h-[400px] bottom-[100px]">
                {/* Awan Horizontal (Atas) */}
                {/* <div className="absolute top-[-170px] w-full flex">
                    {clouds.map((cloud, index) => (
                        <img
                            key={index}
                            src={cloud}
                            alt="Cloud"
                            className={`w-[400px] h-auto ${
                                index % 2 !== 0 ? "transform scale-x-[-1]" : ""
                            }`}
                        />
                    ))}
                </div> */}

                {/* Awan Horizontal (Bawah, Flip Vertikal) */}
                {/* <div className="absolute bottom-[250px] w-full flex">
                    {clouds.map((cloud, index) => (
                        <img
                            key={`vertical-${index}`}
                            src={cloud}
                            alt="Cloud Flipped Vertically"
                            className={`w-[400px] h-auto ${
                                index % 2 !== 0
                                    ? "transform scale-x-[-1] scale-y-[-1]"
                                    : "transform scale-y-[-1]"
                            }`}
                        />
                    ))}
                </div> */}

                <div className="absolute w-full-flex bottom-[200px] ">

                    <img src="images/Cloudsss.svg" alt="Awan" />

                </div>
            </div>
        </>
    );
};

export default Hero;
