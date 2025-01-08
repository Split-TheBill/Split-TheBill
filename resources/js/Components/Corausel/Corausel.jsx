import React, { useState, useEffect } from "react";

const Carousel = () => {
    const images = [
        "images/Banner1.svg", // Ganti dengan path gambar Anda
        "images/Banner2.svg",
        "images/Banner3.svg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Logic untuk mengatur pergerakan otomatis
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Geser setiap 3 detik
        return () => clearInterval(interval); // Bersihkan interval saat komponen tidak digunakan
    }, [images.length]);

    // Fungsi untuk navigasi manual
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full flex items-center justify-center overflow-hidden -mt-[70vh] rounded-lg">
            {/* Carousel Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`, // Geser ke gambar saat ini
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full h-[40vh] sm:h-[50vh] lg:h-[55vh] flex items-center justify-center"
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full max-w-[1100px] h-full object-contain rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>

            {/* Indikator */}
            <div className="absolute bottom-4 flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                            index === currentIndex
                                ? "bg-blue-500"
                                : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
