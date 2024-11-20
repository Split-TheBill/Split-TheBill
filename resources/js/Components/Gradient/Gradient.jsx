import React from "react";

const Gradient= () =>{
    return (
        <>
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl bottom-[40%] left-[-200px]"></div>
                <div className="absolute w-[400px] h-[400px] bg-gradient-to-t from-blue-500 to-purple-500 rounded-full blur-3xl top-[10%] right-[-200px]"></div>
            </div>
        </>
    );
};

export default Gradient;