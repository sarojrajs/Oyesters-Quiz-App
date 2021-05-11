import React, { useEffect, useRef, useState } from 'react'
import {useHistory} from 'react-router-dom'
function Timer() {
    const [timer,setTimer]=useState('00:00');
    const intervalRef=useRef();
    const history=useHistory()
    function getTimeRemaining(endTime){
        const total=Date.parse(endTime)-Date.parse(new Date());
        const seconds=Math.floor((total/1000)%60);
        const minutes=Math.floor((total/1000/60)%60);
        return{
            total,seconds,minutes
        };
    }
    function startTimer(deadline){
        let {total,seconds,minutes}=getTimeRemaining(deadline);
        if(total>=0){
            setTimer(
                (minutes>9?minutes:'0'+minutes)+':'+(seconds>9?seconds:'0'+seconds)
            )
        }else{
            clearInterval(intervalRef.current)
            localStorage.removeItem('startTime')
            history.push('/results')
        }
    }
    function clearTimer(endTime){
        setTimer('01:00');
        if(intervalRef.current)clearInterval(intervalRef.current);
        const id=setInterval(()=>{
            startTimer(endTime)
        },[1000])
        intervalRef.current=id;
    }
    function getDeadlineTime(){
        let deadline=new Date();
        if(localStorage.getItem('startTime')){
            deadline=localStorage.getItem('startTime')
        }else{
            deadline.setMinutes(deadline.getMinutes()+1)
            // deadline.setSeconds(deadline.getSeconds()+15)
            localStorage.setItem('startTime',deadline)    
        }
        return deadline
    }
    useEffect(()=>{
        clearTimer(getDeadlineTime());
        
    },[])
    return (
        <div className='timer'>
            <h1>{timer}</h1>
        </div>
    )
}

export default Timer
