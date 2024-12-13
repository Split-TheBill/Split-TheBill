
import React from "react";
import Starfield from "react-starfield";

const Star = () => {
    return (
        <Starfield
            className="absolute inset-0 z-0"
            numStars={300}
            speed={0.5} 
            starColor="#ffffff" 
            background="#000000" 
            depth={0.3}
        />
    );
};

export default Star;
