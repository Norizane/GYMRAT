import React, {useState} from "react";
import {Navigate} from "react-router-dom";




const Monday = () => {
    const [goToHome, setGoToHome] = React.useState(false);
    if(goToHome){
        return <Navigate to="/"/>
    }

    return (

        <div  className=" w-full h-screen circle_Monday bg-cover bg-center flex  justify-center  ">

           <div onClick={() => setGoToHome(true)} className=" text-white material-symbols-outlined mt-8 h-10">home</div>

        </div>

    )
}

export default Monday ;