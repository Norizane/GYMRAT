import React from "react";
import {UseAuth} from "../../context/AuthContext";





const Home = () =>{
    const {logOut} = UseAuth();

    const handleSignOut = async () =>{
        try{
            await logOut();
        }catch (error){
            console.log(error);
        }
    };





    return(
        <div className='bg-slate-800 h-screen w-full'>
            <div className='flex justify-between mx-3.5'>
                <h1 className='text-white font-SCode'>GYMRAT</h1>
                <nav className='flex  content-center'>
                    <ul className='flex justify-center'>
                        <li className='mr-1 text-white font-SCode'><a href="#"></a>Stopwatch</li>
                        <li className='ml-1 text-white font-SCode'><a href="#"></a>Account</li>
                    </ul>
                </nav>
                <button onClick={handleSignOut} className=' flex text-white font-SCode'>LogOut</button>
            </div>

        </div>
    )


}
export default Home;