import React, {useState} from "react";
import {exerciseOptions, fetchData} from "../../units/fatchData";

const Exercise = ({exerciseOptions, fetchData}) => {
console.log(exercise)
    return(
        <div id='exercise' >
            <div>
                {exercise.map((exercise, index ) => (
                    <p>{exercise.map}</p>
                ))}
            </div>
        </div>
    )
}

export default Exercise;