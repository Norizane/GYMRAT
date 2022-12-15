import React, {useState, useEffect} from "react";
import {Navigate} from "react-router-dom";
import {exerciseOptions, fetchData} from "../../units/fatchData";





const GymExercises = () => {
    const [search, setSearch] = useState('');
    const [excersise, setExcersise] = useState([]);
    const [goToHome, setGoToHome] = React.useState(false);
    const [bodyParts, setBodyParts] = useState([])
    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);



            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );

            setSearch('');
            setExcersise(searchedExercises);
        }
    }


    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all',  ...bodyPartsData]);
        };
       fetchExercisesData();

    }, []);


    if (goToHome) {
        return <Navigate to="/"/>
    }







    return (

        <div className=" w-full  h-screen circle_main  ">
            <div>
                <div onClick={() => setGoToHome(true)}
                     className="flex justify-center items-center text-white material-symbols-outlined h-10 ">home
                </div>
            </div>
            <div className=' ml-40 text-neutral-300 pt-5 '>
                Search Exercise
            </div>
            <div className='flex'>

                <input
                    className='ml-40 rounded bg-transparent text-neutral-300 border border-neutral-300 px-0.5 py-0.5 mt-px '
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    type="text"
                />

                <button onClick={handleSearch}
                        className="material-symbols-outlined text-white ml-1 ">manage_search
                </button>

            </div>
            <div>

            </div>
        </div>


    )

}
export default GymExercises;

