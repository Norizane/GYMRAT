import './App.css';
import Singin from "./components/pages/Signin";
import Home from "./components/pages/Home";
import { Route , Routes,} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";
import Protected from "./components/elements/Protected";
import AnimCursor from "./components/elements/AnimatedCursor";
import GymExercises from "./components/pages/GymExercises";
import StopWach from "./components/pages/StopWach";
import Account from "./components/pages/Account";
import Monday from "./components/pages/Days/Monday";
import {useState} from "react";








const App = () => {

    return (
        <div>
            <AuthContextProvider>
                <Routes>

                    <Route path='/' element={<Singin/>}/>
                    <Route path='/Home' element={
                        <Protected>
                            <Home/>
                        </Protected>
                    }/>
                    <Route path='/Account' element={
                        <Protected>
                            <Account/>
                        </Protected>
                    }/>
                    <Route  path='/GymExercises' element={<GymExercises/>}/>
                    <Route path='/StopWach' element={<StopWach/>}/>
                    <Route path='/Account' element={
                        <Protected>
                            {<Account/>}
                        </Protected>
                    }/>
                    <Route path='/Monday' element={<Monday/>}/>

                </Routes>
            </AuthContextProvider>
            <AnimCursor />
        </div>
    );
};
export default App;
