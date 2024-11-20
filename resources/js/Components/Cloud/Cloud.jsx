import React from "react";

const Cloud = () => {
    const clouds = Array(4).fill("images/Awan_Section.svg");

    return (
        <div className="flex overflow-hidden">
            {clouds.map((cloud, index) => (
                <img
                    key={index}
                    src={cloud}
                    alt="Cloud"
                    className={`w-[500px] h-[500px] relative bottom-[169px] ${
                        index % 2 !== 0 ? "transform scale-x-[-1]" : ""
                    }`}
                />
            ))}
        </div>
    );
};

export default Cloud;
