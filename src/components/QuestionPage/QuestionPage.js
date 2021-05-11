import { IconButton } from '@material-ui/core'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import React, { useState } from 'react'
import Question from '../Question/Question'
import './QuestionPage.css'
import {useHistory} from 'react-router-dom'
import Timer from '../Timer/Timer'
import { useSelector } from 'react-redux'
function QuestionPage() {
    const history=useHistory()
    const [questionNumber,setQuestionNumber]=useState(1);
    const loginName=useSelector((state)=>state.user.name);
    const prevQuestion=()=>{
        if(questionNumber!==1)
            setQuestionNumber(prev=>prev-1);
    }
    const nextQuestion=()=>{
        if(questionNumber!==5){
            setQuestionNumber(prev=>prev+1);
        }
    }
    
    return (
        <div className='questionPage'>
            <div className='questionHeader'>
                <h1>{loginName}</h1>
                <Timer/>
            </div>
            <div className='questionContainer'>
                <div className='questionContainerLeft'>
                   {questionNumber===1 && <Question 
                   question='HTML is what type of language ?'
                   id='1'
                   answer='2'
                   opt1='Scripting Language'
                   opt2='Markup Language'
                   opt3='Programming Language'
                   opt4='Network Protocol'
                   />}
                   {questionNumber===2 && <Question 
                   question='HTML uses'
                   id='2'
                   answer='3'
                   opt1='User defined tags'
                   opt2='Pre-specified tags'
                   opt3='Fixed tags defined by the language'
                   opt4='Tags only for linking'/>}
                   {questionNumber===3 && <Question
                    question='The year in which HTML was first proposed _______.'
                    id='3'
                    answer='1'
                    opt1='1990'
                    opt2='1980'
                    opt3='2000'
                    opt4='1995'/>}
                   {questionNumber===4 && <Question 
                   question='Fundamental HTML Block is known as ___________.'
                   answer='2'
                   id='4'
                   opt1='HTML Body'
                   opt2='HTML Tag'
                   opt3='HTML Attribute'
                   opt4='HTML Element'/>}
                   {questionNumber===5 && <Question 
                   question='Apart from <b> tag, what other tag makes text bold ?'
                   answer='2'
                   id='5'
                   opt1='<fat>'
                   opt2='<strong>'
                   opt3='<black>'
                   opt4='<emp>'/>}
                </div>
                <div className='questionContainerRight'>
                    <div className='questionScroller'>
                        <IconButton onClick={prevQuestion}>
                            <ArrowBack />
                        </IconButton>
                        <span id={questionNumber===1 && 'active'}className='questionBox'>1</span>
                        <span id={questionNumber===2 && 'active'}className='questionBox'>2</span>
                        <span id={questionNumber===3 && 'active'}className='questionBox'>3</span>
                        <span id={questionNumber===4 && 'active'}className='questionBox'>4</span>
                        <span id={questionNumber===5 && 'active'}className='questionBox'>5</span>
                        <IconButton onClick={nextQuestion}>
                            <ArrowForward />
                        </IconButton>
                    </div>
                    {questionNumber===5 &&<button className='submit' onClick={()=>{
                        localStorage.removeItem('startTime')
                        history.push('/results')
                        }}>Submit</button>}
                </div>
            </div>
        </div>
    )
}

export default QuestionPage
