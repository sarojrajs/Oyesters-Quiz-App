import React, { useEffect, useState } from 'react'
import './Result.css'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { q1answer, q1opt, q2answer, q2opt, q3answer, q3opt, q4answer, q4opt, q5answer, q5opt,clear} from '../../features/Answer'
import { logout } from '../../features/User'

function Result() {
    const history=useHistory();
    const [answer,setAnswer]=useState(0)
    const q1_answer=useSelector(q1answer);
    const q2_answer=useSelector(q2answer);
    const q3_answer=useSelector(q3answer);
    const q4_answer=useSelector(q4answer);
    const q5_answer=useSelector(q5answer);
    const q1_opt=useSelector(q1opt);
    const q2_opt=useSelector(q2opt);
    const q3_opt=useSelector(q3opt);
    const q4_opt=useSelector(q4opt);
    const q5_opt=useSelector(q5opt);
    const dispatch=useDispatch()

    
    const calculateResult=()=>{
        
        if(q1_answer===q1_opt && q1_answer!=='')
        setAnswer(prev=>prev+1)
        if(q2_answer===q2_opt && q2_answer!=='')
        setAnswer(prev=>prev+1)
        if(q3_answer===q3_opt && q3_answer!=='')
        setAnswer(prev=>prev+1)
        if(q4_answer===q4_opt && q4_answer!=='')
        setAnswer(prev=>prev+1)
        if(q5_answer===q5_opt && q5_answer!=='')
        setAnswer(prev=>prev+1)
    }
    
    const clearLocalStorage=()=>{
        localStorage.removeItem('q1')
        localStorage.removeItem('q2')
        localStorage.removeItem('q3')
        localStorage.removeItem('q4')
        localStorage.removeItem('q5')
    }
    
    useEffect(()=>{
        clearLocalStorage()
        calculateResult()
    },[])
    
    return (
        <div className='result'>
            <div className='resultContainer'>
                <h1>Your Result is {answer}/5</h1>
                <button className='retry' onClick={()=>{
                    dispatch(logout())
                    dispatch(clear())
                    history.push('/')}}>Retry</button>
            </div>
        </div>
    )
}

export default Result 
