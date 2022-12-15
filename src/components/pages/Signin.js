import React, {useEffect} from "react";
import GoogleButton from 'react-google-button'
import Typewriter from "typewriter-effect";
import bgPhto from '../../images/bg_photo.jpg'
import {UseAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

const Singin = () => {
    const {googleSignIn, user} = UseAuth()
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn()
        }catch (errors){
            console.log(errors)
        }
    };

    useEffect(() =>{
        if(user != null){
            navigate('/Home')
        }
    },[user]);

    return(
        <div className='w-full h-screen flex circle_main'>
            <div className=' flex justify-evenly items-center m-auto   sm:max-w-[900px] '>
                <div className=' flex flex-col justify-center '>
                    <form className=' max-w-[400px] w-full mx-auto  p-8 '>
                        <div>

                            <p
                                className={"text-4xl xl:text-5xl text-center font-SCode text-neutral-300 mb-10"}>
                                <Typewriter
                                    options={{
                                        // deleteSpeed: 100,
                                        loop: false,
                                        delay: 100,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("GYM RAT")
                                            // .pauseFor(1000)
                                            // // .deleteAll()
                                            // .pauseFor(300)
                                            .start();
                                    }}
                                />
                            </p>


                            {/*<h2 className='font-SCode text-4xl font-bold text-center py-6 text-white'>GYMRAT</h2>*/}
                            {/*<img className='w-20 h-20 ml-10' src={icon} alt=""/>*/}
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='font-SCode text-neutral-300'>Username</label>
                            <input className='border p-2 rounded mt-2 bg-neutral-300' type="text"/>
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='font-SCode text-neutral-300'>Password</label>
                            <input className='border p-2 rounded mt-2 bg-neutral-300' type="password"/>
                        </div>
                        <button
                            className=' mt-5 w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Sing
                            In
                        </button>
                        <div className='flex justify-center mt-5'>
                            <GoogleButton
                                onClick={handleGoogleSignIn}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Singin;