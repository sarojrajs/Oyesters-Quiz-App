import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  setans1, setans2, setans3, setans4, setans5, setq1ans, setq2ans, setq3ans, setq4ans, setq5ans } from '../../features/Answer'
import Options from '../Options/Options'
import './Question.css'
function Question({id,question,answer,opt1,opt2,opt3,opt4}) {

    const [selected,setSelected]=useState(0)
    
    const dispatch=useDispatch()

    const setAnswer=(value)=>{
        if(id==='1'){
            dispatch(setq1ans(value))
            localStorage.setItem('q1',value)
        }else if(id==='2'){
            dispatch(setq2ans(value))
            localStorage.setItem('q2',value)
        }else if(id==='3'){
            dispatch(setq3ans(value))
            localStorage.setItem('q3',value)
        }else if(id==='4'){
            dispatch(setq4ans(value))
            localStorage.setItem('q4',value)
        }else if(id==='5'){
            dispatch(setq5ans(value))
            localStorage.setItem('q5',value)
        }else{
            console.log('Not valid')
        }
        setSelected(value)
    }
    const storeAnswer=()=>{
        if(id==='1'){
            dispatch(setans1(answer))
        }else if(id==='2'){
            dispatch(setans2(answer))
        }else if(id==='3'){
            dispatch(setans3(answer))
        }else if(id==='4'){
            dispatch(setans4(answer))
        }else if(id==='5'){
            dispatch(setans5(answer))
        }else{
            console.log('Not valid')
        }
    }
    const setOptions=()=>{
        if(id==='1'){
            setSelected(localStorage.getItem('q1'))
        }else if(id==='2'){
            setSelected(localStorage.getItem('q2'))
        }else if(id==='3'){
            setSelected(localStorage.getItem('q3'))
        }else if(id==='4'){
            setSelected(localStorage.getItem('q4'))
        }else if(id==='5'){
            setSelected(localStorage.getItem('q5'))
        }else{
            console.log('Not valid')
        }
    }
    useEffect(()=>{
        storeAnswer()
        setOptions()
    },[])
    return (
        <div className='question'>
            {/* <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h3> */}
            <h3>{question}</h3>
            {/* <button className='resetOption' onClick={resetAnswer}>Reset</button> */}
            <div className='questionOptions'>
                <div className='optionRow1'>
                    <Options optionvalue='1' select={selected} onClick={setAnswer} option={opt1}/>
                    <Options optionvalue='2' select={selected} onClick={setAnswer} option={opt2}/>
                </div>
                <div className='optionRow2'>
                    <Options optionvalue='3' select={selected} onClick={setAnswer} option={opt3}/>
                    <Options optionvalue='4' select={selected} onClick={setAnswer} option={opt4}/>
                </div>
            </div>
        </div>
    )
}

export default Question
