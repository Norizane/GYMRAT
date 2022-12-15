import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const Preloader = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {loading ? (
                <div className='circle_main w-screen h-screen flex justify-center items-center flex-col  z-10 fixed'>
                    <BarLoader color={"rgb(16 185 129)"} loading={loading} size={15}/>
                </div>
            ) : null}
        </>
    );
};

export default Preloader;