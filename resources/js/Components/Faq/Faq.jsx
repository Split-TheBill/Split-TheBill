import React, { useState } from "react";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question:
                "Apa yang membuat SPLIT THE BILL berbeda dari platform lain?",
            answer: "SPLIT THE BILL memungkinkan pembelian aplikasi premium secara patungan dengan sistem yang aman dan transparan.",
        },
        {
            question: "Bagaimana cara bergabung dengan grup patungan?",
            answer: "Anda dapat bergabung dengan grup patungan menggunakan kode undangan yang diberikan oleh pembuat grup.",
        },
        {
            question: "Metode pembayaran apa saja yang didukung?",
            answer: "Kami mendukung berbagai metode pembayaran seperti transfer bank, e-wallet, dan kartu kredit.",
        },
        {
            question: "Bagaimana cara memperpanjang langganan?",
            answer: "Langganan dapat diperpanjang melalui dashboard dengan memilih opsi perpanjangan grup atau paket individu.",
        },
        {
            question: "Apakah aplikasi ini aman digunakan?",
            answer: "Kami menggunakan sistem keamanan enkripsi terbaru untuk memastikan data Anda aman dan transaksi terlindungi.",
        },
        {
            question: "Bagaimana jika anggota grup tidak membayar?",
            answer: "Jika anggota grup tidak membayar, langganan grup tidak akan aktif sampai semua anggota menyelesaikan pembayaran.",
        },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle aktif atau nonaktif
    };

    return (
        <div className="bg-gradient-to-b  py-16 px-4 text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Frequently Asked Question (FAQ)
                </h2>
                <p className="text-lg mb-8 text-gray-400">
                    Beberapa Pertanyaan yang Sering Ditanyakan Oleh Pengguna
                </p>

                {/* Grid FAQ 3 Kolom x 2 Baris */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white text-black rounded-lg p-4 shadow-md transition duration-300 ${
                                activeIndex === index
                                    ? "ring-2 ring-blue-500"
                                    : ""
                            }`}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => handleToggle(index)}
                            >
                                <p className="font-medium">{faq.question}</p>
                                <span
                                    className={`text-blue-500 font-bold text-lg transform transition-transform duration-300 ${
                                        activeIndex === index ? "rotate-90" : ""
                                    }`}
                                >
                                    &gt;
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="mt-4 text-gray-700">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
