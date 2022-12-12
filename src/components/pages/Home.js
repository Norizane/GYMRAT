import React, {useState} from "react";
import {UseAuth} from "../../context/AuthContext";
import Preloader from "../elements/Preloader";
import Style from "../../style.css";
// import {DragDropContext, Droppable , Draggable} from "react-beautiful-dnd";
import Monday from '../pages/Days/Monday'

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
                                <button className='hover:text-emerald-500'>Monday</button>
                                <button className='hover:text-emerald-500'>Tuesday</button>
                                <button className='hover:text-emerald-500'>Wednesday</button>
                                <button className='hover:text-emerald-500'>Thursday</button>
                                <button className='hover:text-emerald-500'>Friday</button>
                                <button className='hover:text-emerald-500'>Saturday</button>
                                <button className='hover:text-emerald-500'>Sunday</button>
                            </li>
                        </ul>

                        {/*<DragDropContext >*/}
                        {/*    <Droppable droppableId='Plans'>*/}
                        {/*        {(provided) => (*/}
                        {/*            <ul className='text-emerald-500 ml-4 ' {...provided.droppableProps} ref={provided.innerRef}>*/}
                        {/*                {Conteiners.map(({id, PlanName},index) => {*/}
                        {/*                    return (*/}
                        {/*                        <Draggable key={id} draggableId={id} index={index}>*/}
                        {/*                            {(provided) => (*/}
                        {/*                        <li className='text-3xl ' {...provided.draggableProps} {...provided.dragHandleProps}  ref={provided.innerRef}>*/}

                        {/*                                <p>{PlanName}</p>*/}

                        {/*                        </li>*/}
                        {/*                            )}*/}
                        {/*                        </Draggable>*/}
                        {/*                    );*/}
                        {/*                })}*/}
                        {/*            </ul>*/}
                        {/*        )}*/}
                        {/*    </Droppable>*/}
                        {/*</DragDropContext>*/}
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