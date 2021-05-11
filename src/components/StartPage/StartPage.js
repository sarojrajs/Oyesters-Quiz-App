import React, { useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import Instruction from '../Instruction/Instruction'
import {login} from '../../features/User'
import './StartPage.css'
function StartPage() {
    
    const [name,setName]=useState('')
    const [instruction,setInstruction]=useState(false)
    const ref=useRef()
    
    const dispatch=useDispatch()


    const submitName=()=>{
        if(name.length===0){
            ref.current.style.display='block'
           
        }
        else{
            dispatch(login(name))
            localStorage.removeItem('startTime')
            localStorage.removeItem('q1')
        localStorage.removeItem('q2')
        localStorage.removeItem('q3')
        localStorage.removeItem('q4')
        localStorage.removeItem('q5')
            ref.current.style.display='none'
        setInstruction(true)
        console.log('click',name)
        }
    }

    return (
        <div className='startPage'>
            {
                !instruction?
            <div className='startPage__Container'>
                <h1>Let's get Started</h1>
                <div className='startPage__Input'>
                <label forhtml='name'>Enter your Name:</label>
                <input id='name' type='text' placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <p className='enterValidName' ref={ref}>!Enter valid name</p>
                <button onClick={submitName}>Submit</button>
            </div>
            :
            <Instruction/>
            }
        </div>
    )
}

export default StartPage
