import React from "react";
import HeroImg from "../../../../public/images/hero.svg";
import Awan from "../../../../public/images/cloud_2.png";

const Hero = () => {
    return (
        <>
            <div className="relative -mt-[4rem] pt-[5rem] sm:pt-[6rem] md:pt-[7rem] lg:pt-[8rem]">
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[34.375rem] sm:min-h-[37.5rem] md:min-h-[40.625rem] relative">
                    {/* Split TheBill Description */}
                    <div className="flex flex-col justify-center py-[2.5rem] sm:py-[3.5rem] md:py-0 px-[1rem] md:px-0">
                        <div className="text-center md:text-left space-y-[1.5rem] font-lexend ml-0 md:ml-[5.625rem]">
                            <h1 className="text-white text-[1.5rem] sm:text-[1.875rem] lg:text-[2.5rem] xl:text-[3.125rem] font-bold leading-relaxed sm:leading-snug lg:leading-normal">
                                Selamat Datang di Split TheBill!
                            </h1>
                            <p className="text-white max-w-[31.25rem] mx-auto md:mx-0 font-light text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem]">
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
                    <div className="flex justify-center items-center mx-[1rem] md:ml-[6.25rem]">
                        <img
                            src={HeroImg}
                            alt="Hero Image"
                            className="w-full max-w-[21.875rem] sm:max-w-[25rem] md:max-w-[28.125rem] lg:max-w-[31.25rem]"
                        />
                    </div>
                </div>
            </div>

            {/* <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem]">
                <img src={Awan} alt="Awan" className="h-full w-full object-cover" />
            </div> */}
        </>
    );
};

export default Hero;
