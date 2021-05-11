import { createSlice } from '@reduxjs/toolkit'

export const answerSlice = createSlice({
  name: 'answer',
  initialState: {
    q1ans:'',
    ans1:'',
    q2ans:'',
    ans2:'',
    q3ans:'',
    ans3:'',
    q4ans:'',
    ans4:'',
    q5ans:'',
    ans5:''
  },
  reducers: {
    setans1:(state,action)=>{
        state.ans1=action.payload
    },
    setans2:(state,action)=>{
        state.ans2=action.payload
    },
    setans3:(state,action)=>{
        state.ans3=action.payload
    },
    setans4:(state,action)=>{
        state.ans4=action.payload
    },
    setans5:(state,action)=>{
        state.ans5=action.payload
    },
    setq1ans:(state,action)=>{
        state.q1ans=action.payload
    },
    setq2ans:(state,action)=>{
        state.q2ans=action.payload
    },
    setq3ans:(state,action)=>{
        state.q3ans=action.payload
    },
    setq4ans:(state,action)=>{
        state.q4ans=action.payload
    },
    setq5ans:(state,action)=>{
        state.q5ans=action.payload
    },
    clear:(state)=>{
        state.q1ans=''
        state.q2ans=''
        state.q3ans=''
        state.q4ans=''
        state.q5ans=''
        state.ans1=''
        state.ans2=''
        state.ans3=''
        state.ans4=''
        state.ans5=''
    }
  },
})

// Action creators are generated for each case reducer function
export const { setans1,setans2,setans3,setans4,setans5,setq1ans,setq2ans,setq3ans,setq4ans,setq5ans,clear } = answerSlice.actions

export const q1opt=state=>state.answer.q1ans;
export const q2opt=state=>state.answer.q2ans;
export const q3opt=state=>state.answer.q3ans;
export const q4opt=state=>state.answer.q4ans;
export const q5opt=state=>state.answer.q5ans;
export const q1answer=state=>state.answer.ans1;
export const q2answer=state=>state.answer.ans2;
export const q3answer=state=>state.answer.ans3;
export const q4answer=state=>state.answer.ans4;
export const q5answer=state=>state.answer.ans5;


export default answerSlice.reducer