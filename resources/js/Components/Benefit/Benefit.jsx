import React from "react";
import {
    ShieldCheckIcon,
    CreditCardIcon,
    BellIcon,
    LockClosedIcon,
    ChatBubbleLeftEllipsisIcon,
    TagIcon,
} from "@heroicons/react/24/solid";

const Benefit = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center">
            {/* Heading */}
            <div className="text-center mb-[2rem] mt-[3rem]">
                <h1 className="text-white text-[1.875rem] sm:text-[2.25rem] font-bold leading-relaxed">
                    Keuntungan Berlangganan Aplikasi Premium
                </h1>
                <h1 className="text-white text-[1.875rem] sm:text-[2.25rem] font-bold leading-relaxed">
                    Lebih Hemat dan Legal di Split Thebill
                </h1>
            </div>

            {/* Grid Container */}
            <div className="container mx-auto px-[1rem] py-[3rem] max-w-[60rem] relative z-10">
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mt-[0.25rem]">
                    <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3">
                        {/* Card 1 */}
                        <div className="p-[1.5rem] text-center">
                            <div className="flex justify-center mb-[1rem]">
                                <TagIcon className="w-[2.5rem] h-[2.5rem] text-yellow-500" />
                            </div>
                            <h4 className="font-bold text-[1.125rem] text-white">
                                Hemat Hingga 70%
                            </h4>
                        </div>

                        {/* Card 2 */}
                        <div className="p-[1.5rem] text-center">
                            <div className="flex justify-center mb-[1rem]">
                                <LockClosedIcon className="w-[2.5rem] h-[2.5rem] text-blue-500" />
                            </div>
                            <h4 className="font-bold text-[1.125rem] text-white">
                                Privasi Terjamin
                            </h4>
                        </div>

                        {/* Card 3 */}
                        <div className="p-[1.5rem] text-center">
                            <div className="flex justify-center mb-[1rem]">
                                <ChatBubbleLeftEllipsisIcon className="w-[2.5rem] h-[2.5rem] text-green-500" />
                            </div>
                            <h4 className="font-bold text-[1.125rem] text-white">
                                Customer Service Responsive
                            </h4>
                        </div>

                        {/* Card 4 */}
                        <div className="p-[1.5rem] text-center">
                            <div className="flex justify-center mb-[1rem]">
                                <ShieldCheckIcon className="w-[2.5rem] h-[2.5rem] text-purple-500" />
                            </div>
                            <h4 className="font-bold text-[1.125rem] text-white">
                                Layanan Legal dan Resmi
                            </h4>
                        </div>

                        {/* Card 5 */}
                        <div className="p-[1.5rem] text-center">
                            <div className="flex justify-center mb-[1rem]">
                                <CreditCardIcon className="w-[2.5rem] h-[2.5rem] text-red-500" />
                            </div>
                            <h4 className="font-bold text-[1.125rem] text-white">
                                Beragam Metode Pembayaran
                            </h4>
                        </div>

                        {/* Card 6 */}
                        <div className="p-[1.5rem] text-center">
                            <div className="flex justify-center mb-[1rem]">
                                <BellIcon className="w-[2.5rem] h-[2.5rem] text-orange-500" />
                            </div>
                            <h4 className="font-bold text-[1.125rem] text-white">
                                Pengingat Pembayaran
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cloud Images */}
            <div className="absolute inset-x-0 bottom-[12rem] sm:-bottom-[20rem] md:bottom-[42rem]">
                <img
                    src="images/cloud1.svg"
                    alt="Cloud Left"
                    className="absolute left-[-6.25rem] w-[25rem] sm:w-[31.25rem] md:w-[37.5rem] z-10 -scale-x-100 animate-cloud-left"
                />
                <img
                    src="images/cloud1.svg"
                    alt="Cloud Right"
                    className="absolute right-[-6.25rem] w-[25rem] sm:w-[31.25rem] md:w-[37.5rem] z-10 animate-cloud-right"
                />
            </div>

            {/* Keyframes and Animations */}
            <style>
                {`
                    @keyframes cloud-left {
                        0% {
                            transform: translateX(-0.625rem) scaleX(-1);
                        }
                        50% {
                            transform: translateX(1.25rem) scaleX(-1);
                        }
                        100% {
                            transform: translateX(-0.625rem) scaleX(-1);
                        }
                    }
                    @keyframes cloud-right {
                        0% {
                            transform: translateX(0.625rem);
                        }
                        50% {
                            transform: translateX(-1.25rem);
                        }
                        100% {
                            transform: translateX(0.625rem);
                        }
                    }
                    .animate-cloud-left {
                        animation: cloud-left 5s ease-in-out infinite;
                    }
                    .animate-cloud-right {
                        animation: cloud-right 5s ease-in-out infinite;
                    }
                `}
            </style>
        </section>
    );
};

export default Benefit;
