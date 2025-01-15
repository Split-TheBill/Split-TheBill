import React from "react";

const Subscription = () => {
    return (
        <>
            <div className="relative text-white py-16">
                {/* Section dengan Background */}
                <div className="relative bg-gray-700 bg-opacity-80 rounded-lg p-8 max-w-6xl mx-auto">
                    <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
                        Cara Langganan Akun
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                        {/* Kolom Kiri */}
                        <div className="flex flex-col space-y-6">
                            {/* Item 1 */}
                            <div className="flex items-start">
                                <div className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-blue-600 text-white font-bold text-lg mr-4">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Registrasi Akun
                                    </h3>
                                    <p>
                                        Pembeli mendaftar dan membuat akun di
                                        website dengan mengisi data diri serta
                                        memverifikasi melalui email.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start">
                                <div className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-blue-600 text-white font-bold text-lg mr-4">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Pilih APP Premium
                                    </h3>
                                    <p>
                                        Setelah login, pembeli mencari aplikasi
                                        premium yang ingin dibeli dan melihat
                                        opsi pembelian patungan.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-start">
                                <div className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-blue-600 text-white font-bold text-lg mr-4">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Group Patungan
                                    </h3>
                                    <p>
                                        Pembeli dapat membuat grup patungan baru
                                        atau bergabung dengan grup yang sudah
                                        ada menggunakan kode undangan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan */}
                        <div className="flex flex-col space-y-6">
                            {/* Item 4 */}
                            <div className="flex items-start">
                                <div className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-blue-600 text-white font-bold text-lg mr-4">
                                    4
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Pembayaran
                                    </h3>
                                    <p>
                                        Setiap anggota grup membayar sesuai
                                        bagiannya menggunakan metode pembayaran
                                        yang tersedia.
                                    </p>
                                </div>
                            </div>

                            {/* Item 5 */}
                            <div className="flex items-start">
                                <div className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-blue-600 text-white font-bold text-lg mr-4">
                                    5
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Akses Aplikasi Premium
                                    </h3>
                                    <p>
                                        Setelah semua pembayaran dikonfirmasi,
                                        pembeli mendapatkan akses ke aplikasi
                                        premium sesuai ketentuan paket patungan.
                                    </p>
                                </div>
                            </div>

                            {/* Item 6 */}
                            <div className="flex items-start">
                                <div className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-blue-600 text-white font-bold text-lg mr-4">
                                    6
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        Kelola Langganan
                                    </h3>
                                    <p>
                                        Pembeli bisa mengelola akses aplikasi
                                        melalui dashboard, memperpanjang
                                        langganan, atau keluar dari grup
                                        patungan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscription;
