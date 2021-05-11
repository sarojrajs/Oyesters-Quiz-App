import React from 'react'
import './Options.css'
function Options({optionvalue,select,onClick,option}) {
    const setAnswer=()=>{
        onClick(optionvalue)
    }
    return (
        <div className='options' id={optionvalue===select && 'optionSelected'} onClick={setAnswer}>
            <p>{option}</p>
        </div>
    )
}

export default Options
