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
        <section className="relative min-h-screen flex flex-col items-center  top-[-450px]">
            {/* Heading */}
            <div className="text-center mb-8 mt-12">
                <h1 className="text-white text-3xl font-bold leading-relaxed">
                    Keuntungan Berlangganan Aplikasi Premium
                </h1>
                <h1 className="text-white text-3xl font-bold leading-relaxed">
                    Lebih Hemat dan Legal di Split Thebill
                </h1>
            </div>

            {/* Grid Container */}
            <div className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mt-1">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        {/* Card 1 */}
                        <div className="p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <TagIcon className="w-10 h-10 text-yellow-500" />
                            </div>
                            <h4 className="font-bold text-lg text-white">
                                Hemat Hingga 70%
                            </h4>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <LockClosedIcon className="w-10 h-10 text-blue-500" />
                            </div>
                            <h4 className="font-bold text-lg text-white">
                                Privasi Terjamin
                            </h4>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <ChatBubbleLeftEllipsisIcon className="w-10 h-10 text-green-500" />
                            </div>
                            <h4 className="font-bold text-lg text-white">
                                Customer Service Responsive
                            </h4>
                        </div>

                        {/* Card 4 */}
                        <div className="p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <ShieldCheckIcon className="w-10 h-10 text-purple-500" />
                            </div>
                            <h4 className="font-bold text-lg text-white">
                                Layanan Legal dan Resmi
                            </h4>
                        </div>

                        {/* Card 5 */}
                        <div className="p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <CreditCardIcon className="w-10 h-10 text-red-500" />
                            </div>
                            <h4 className="font-bold text-lg text-white">
                                Beragam Metode Pembayaran
                            </h4>
                        </div>

                        {/* Card 6 */}
                        <div className="p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <BellIcon className="w-10 h-10 text-orange-500" />
                            </div>
                            <h4 className="font-bold text-lg text-white">
                                Pengingat Pembayaran
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cloud Images */}
            <img
                src="images/cloud1.svg"
                alt="Cloud Left"
                className="absolute top-[350px] left-[-100px] w-[400px] sm:w-[500px] md:w-[600px] z-10 -scale-x-100 animate-cloud-left"
            />
            <img
                src="images/cloud1.svg"
                alt="Cloud Right"
                className="absolute top-[350px] right-[-100px] w-[400px] sm:w-[500px] md:w-[600px] z-10 animate-cloud-right"
            />

            {/* Keyframes and Animations */}
            <style>
                {`
                    @keyframes cloud-left {
                        0% {
                            transform: translateX(-10px) scaleX(-1);
                        }
                        50% {
                            transform: translateX(20px) scaleX(-1);
                        }
                        100% {
                            transform: translateX(-10px) scaleX(-1);
                        }
                    }
                    @keyframes cloud-right {
                        0% {
                            transform: translateX(10px);
                        }
                        50% {
                            transform: translateX(-20px);
                        }
                        100% {
                            transform: translateX(10px);
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
