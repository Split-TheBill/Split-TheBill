import React from "react";

const Payment = () => {

    return (
        <>
            <div className=" py-10">
                <h2 className="text-center text-3xl md:text-3xl font-bold mb-8 text-white">
                    Metode Pembayaran
                </h2>
                <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4">
                    {/* Bank BSI */}
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="w-full h-[100px] flex items-center justify-center">
                            <img
                                src="/images/bsi.png"
                                alt="Bank BSI"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <p className="mt-4 text-center text-sm font-medium text-gray-700">
                            Bank BSI
                        </p>
                    </div>

                    {/* Dana */}
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="w-full h-[100px] flex items-center justify-center">
                            <img
                                src="/images/dana.png"
                                alt="Dana"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <p className="mt-4 text-center text-sm font-medium text-gray-700">
                            Dana
                        </p>
                    </div>

                    {/* OVO */}
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="w-full h-[100px] flex items-center justify-center">
                            <img
                                src="/images/ovo.png"
                                alt="OVO"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <p className="mt-4 text-center text-sm font-medium text-gray-700">
                            OVO
                        </p>
                    </div>

                    {/* GoPay */}
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="w-full h-[100px] flex items-center justify-center">
                            <img
                                src="/images/gopay.png"
                                alt="GoPay"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <p className="mt-4 text-center text-sm font-medium text-gray-700">
                            GoPay
                        </p>
                    </div>

                    {/* ShopeePay */}
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="w-full h-[100px] flex items-center justify-center">
                            <img
                                src="/images/shoopepay.png"
                                alt="ShopeePay"
                                className="max-h-full object-contain"
                            />
                        </div>
                        <p className="mt-4 text-center text-sm font-medium text-gray-700">
                            ShopeePay
                        </p>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Payment;