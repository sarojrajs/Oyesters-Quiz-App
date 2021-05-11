import React from 'react'
import './Instruction.css'
import {useHistory} from 'react-router-dom'
function Instruction() {
    const history=useHistory()
    return (
        <div className='instruction'>
            <div className='instructionContainer'>
                <h1>Instruction Page</h1>
                <div className='instructionDetails'>
                    <p>There are a total of 5 questions</p>
                    <p>A total time of 1 minute will be given</p>
                    <p>Best of Luck</p>
                </div>
                <button className='startQuiz__Button' onClick={()=>{
                    history.push('/questions')
                }}>Start Quiz</button>
            </div>
        </div>
    )
}

export default Instruction
