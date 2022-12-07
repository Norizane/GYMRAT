import './App.css';
import Singin from "./components/pages/Signin";
import Home from "./components/pages/Home";
import Account from "./components/pages/Account";
import { Route , Routes,} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";
import Protected from "./components/Protected";


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

                </Routes>
            </AuthContextProvider>
        </div>
    );
};
export default App;
