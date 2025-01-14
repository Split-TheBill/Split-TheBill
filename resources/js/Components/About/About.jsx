import React from "react";
import HeroImg from "../../../../public/images/aboutus.svg";

const About = () => {
    return (
        <>
            <div className="relative -top-1 sm:-top-[4rem] md:-top-[7rem]">
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[34.375rem] sm:min-h-[37.5rem] md:min-h-[40.625rem] relative">
                    {/* Gambar Ilustrasi */}
                    <div className="flex justify-center items-center px-[1rem] sm:px-[2rem]">
                        <img
                            src={HeroImg}
                            alt="Hero"
                            className="w-full max-w-[18.75rem] sm:max-w-[21.875rem] md:max-w-[25rem] lg:max-w-[28.125rem]"
                        />
                    </div>

                    {/* Deskripsi */}
                    <div className="flex flex-col justify-center py-[2.5rem] sm:py-[3rem] md:py-0">
                        <div className="text-center md:text-left space-y-[1.5rem] font-lexend mx-[1rem] md:mx-[1.5rem] lg:mx-[2rem]">
                            <h1 className="text-white text-[1.875rem] sm:text-[2.5rem] lg:text-[3.125rem] font-bold leading-relaxed sm:leading-snug lg:leading-normal">
                                Tentang Kami
                            </h1>
                            <p className="text-white text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] xl:max-w-[31.25rem] mx-auto md:mx-0 font-light">
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
            </div>

        </>
    );
};

export default About;
