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
        }, 3 * 1000); // Geser setiap 3 detik
        return () => clearInterval(interval); // Bersihkan interval saat komponen tidak digunakan
    }, [images.length]);

    // Fungsi untuk navigasi manual
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] flex items-center justify-center overflow-hidden -top-[1rem] sm:-top-[3rem] md:-top-[4rem] lg:-top-[5rem] rounded-lg">
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
                        className="flex-shrink-0 w-full h-[20rem] sm:h-[25rem] md:h-[30rem] flex items-center justify-center"
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full max-w-[68.75rem] h-full object-contain rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
