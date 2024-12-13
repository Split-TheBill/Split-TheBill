import React from "react";
import HeroImg from "../../../../public/images/hero.svg";

const Hero = () => {
    const clouds = Array(4).fill("images/Awan_Section.svg");

    return (
        <>
            <section className="relative top-[-150px]">
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                    {/* Split TheBill desc */}
                    <div className="flex flex-col justify-center py-14 md:py-0 px-4 md:px-0">
                        <div className="text-center md:text-left space-y-6 font-lexend ml-0 md:ml-[90px]">
                            <h1 className="text-white text-3xl sm:text-4xl font-bold lg:text-5xl leading-relaxed xl:leading-normal">
                                Selamat Datang di Split TheBill!
                            </h1>
                            <p className="text-white xl:max-w-[500px] mx-auto md:mx-0 font-light">
                                Platform terbaik untuk berbagi langganan layanan
                                aplikasi premium. Dengan kami, Anda bisa berbagi
                                langganan dengan aman, legal, dan pastinya lebih
                                hemat. Bergabunglah sekarang dan rasakan
                                kemudahan serta keamanan yang kami tawarkan!
                                Hemat lebih banyak, nikmati lebih lama!
                            </p>
                        </div>
                    </div>
                    {/* Ilustrasi */}
                    <div className="flex justify-center items-center mx-4 md:ml-[100px]">
                        <img
                            src={HeroImg}
                            alt="Hero Image"
                            className="w-full max-w-[450px]"
                        />
                    </div>
                </div>
            </section>

            <div className="relative h-[400px] bottom-[100px]">
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

export default Hero;
