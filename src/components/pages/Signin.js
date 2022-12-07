import React, {useEffect} from "react";
import GoogleButton from 'react-google-button'
// import icon from '../../images/gymraticon.png'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
           
           <div className='hidden sm:block'>
               <img className='w-full h-full object-cover' src={bgPhto} alt=""/>
           </div>
            <div className='bg-slate-800 flex flex-col justify-center '>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4 rounded '>
                <div>
                <h2 className='font-SCode text-4xl font-bold text-center py-6'>GYMRAT</h2>
                {/*<img className='w-20 h-20 ml-10' src={icon} alt=""/>*/}
                </div>
                <div className='flex flex-col py-2'>
                    <label className='font-SCode'>Username</label>
                    <input className='border p-2' type="text"/>
                </div>

                <div className='flex flex-col py-2'>
                    <label className='font-SCode'>Password</label>
                    <input className='border p-2' type="password"/>
                </div>
                <button className=' mt-5 w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Sing In</button>
                <div className='flex justify-center mt-5'>
                    <GoogleButton
                        onClick={handleGoogleSignIn}
                    />
                </div>
            </form>
            </div>
        </div>
    )
}
export default Singin;