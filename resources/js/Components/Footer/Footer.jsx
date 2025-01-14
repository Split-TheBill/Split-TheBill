import React from "react";
import AstronautImg from "../../../../public/images/logo_split.png";

const Footer = () => {
    return (
        <footer className="bg-gray-200 relative">
            {/* Pembatas */}
            <div className="w-full h-[0.375rem] bg-gradient-to-r from-[#22A7F0] to-[#C926DF] rounded-full mx-auto mb-[2rem]"></div>

            {/* Footer Content */}
            <div className="container mx-auto px-[1rem] md:px-[2rem] lg:px-[3rem] py-[2rem] md:py-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem] text-gray-700">
                {/* Section 1 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <img
                        src={AstronautImg}
                        alt="Astronaut"
                        className="w-[10rem] h-auto mb-[1rem]"
                    />
                    <h3 className="text-lg font-bold">SPLIT THEBILL</h3>
                    <p className="text-sm mt-[0.5rem] leading-relaxed">
                        Platform yang memberikan layanan berlangganan dengan
                        cara berbagi langganan untuk menikmati fitur premium
                        dengan harga murah, bebas kendala, account dijamin
                        original, dan juga legal.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h3 className="text-lg font-bold mb-[1rem]">
                        Split TheBill
                    </h3>
                    <ul className="space-y-[0.5rem]">
                        <li>
                            <a
                                href="#home"
                                className="text-sm text-gray-600 hover:text-gray-800 transition"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-sm text-gray-600 hover:text-gray-800 transition"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#product"
                                className="text-sm text-gray-600 hover:text-gray-800 transition"
                            >
                                Product
                            </a>
                        </li>
                        <li>
                            <a
                                href="#faq"
                                className="text-sm text-gray-600 hover:text-gray-800 transition"
                            >
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h3 className="text-lg font-bold mb-[1rem]">
                        Hubungi Kami
                    </h3>
                    <ul className="space-y-[0.5rem]">
                        <li className="text-sm flex items-center space-x-[0.5rem]">
                            <span className="material-icons text-gray-600">
                                email
                            </span>
                            <span>SplitTheBill@gmail.com</span>
                        </li>
                        <li className="text-sm flex items-center space-x-[0.5rem]">
                            <span className="material-icons text-gray-600">
                                phone
                            </span>
                            <span>0895390187540</span>
                        </li>
                        <li>
                            <div className="text-sm flex flex-col">
                                <h4 className="font-semibold">
                                    Jam Operasional
                                </h4>
                                <p>Setiap Hari</p>
                                <p>08.00 - 21.00 WIB</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
