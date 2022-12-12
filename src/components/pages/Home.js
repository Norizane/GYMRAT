import React, {useState} from "react";
import {UseAuth} from "../../context/AuthContext";
import Preloader from "../elements/Preloader";
import Style from "../../style.css";
import {Navigate} from "react-router-dom";

const Home = () =>{
    const {logOut} = UseAuth();

    const handleSignOut = async () =>{
        try{
            await logOut();
        }catch (error){
            console.log(error);
        }
    };

    const [goToMonday, setGoToMonday] = React.useState(false);
    const [goToTuesday, setGoToTuesday] = React.useState(false);
    const [goToWednesday, setGoToWednesday] = React.useState(false);
    const [goToThursday, setGoToThursday] = React.useState(false);
    const [goToFriday, setGoToFriday] = React.useState(false);
    const [goToSaturday, setGoToSaturday] = React.useState(false);
    const [goToSunday, setGoToSunday] = React.useState(false);
    if(goToMonday){
        return <Navigate to="/Monday"/>
    }
    if(goToTuesday){
        return <Navigate to="/Tuesday"/>
    }
    if(goToWednesday){
        return <Navigate to="/Wednesday"/>
    }
    if(goToThursday){
        return <Navigate to="/Thursday"/>
    }
    if(goToFriday){
        return <Navigate to="/Friday"/>
    }
    if(goToSaturday){
        return <Navigate to="/Saturday"/>
    }
    if(goToSunday){
        return <Navigate to="/Sunday"/>
    }







    return(
        <>
            <Preloader/>
            <div className='app-conteiner '>
                <div
                    className=" w-full h-screen circle bg-cover bg-center flex flex-col justify-center items-center ">

                        <div className='text-emerald-500 text-2xl mb-2 '>GYM RAT</div>
                        <div className='  justify-center '>

                        <button onClick={handleSignOut} className='text-orange-600 material-symbols-outlined '>Logout</button>
                    </div>
                    <div className="w-full h-full flex  justify-evenly items-center backdrop-blur-lg">
                        <div className="text-emerald-500 material-symbols-outlined ">person</div>
                        <div>
                        <ul className='text-3xl text-slate-600 '>
                            <li className='py-4 flex-col flex'>
                                <button onClick={() => setGoToMonday(true)} className='hover:text-emerald-500'>Monday</button>
                                <button onClick={() => setGoToTuesday(true)} className='hover:text-emerald-500'>Tuesday</button>
                                <button onClick={() => setGoToWednesday(true)} className='hover:text-emerald-500'>Wednesday</button>
                                <button onClick={() => setGoToThursday(true)} className='hover:text-emerald-500'>Thursday</button>
                                <button onClick={() => setGoToFriday(true)} className='hover:text-emerald-500'>Friday</button>
                                <button onClick={() => setGoToSaturday(true)} className='hover:text-emerald-500'>Saturday</button>
                                <button onClick={() => setGoToSunday(true)} className='hover:text-emerald-500'>Sunday</button>
                            </li>
                        </ul>

                        </div>
                        <div className="text-emerald-500 material-symbols-outlined ">timer</div>
                    </div>
                    <div className="text-emerald-500 material-symbols-outlined mb-8 ">fitness_center</div>
                </div>
            </div>

        </>
    )


}
export default Home;