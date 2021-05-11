import React from 'react';
import './App.css';
import QuestionPage from './components/QuestionPage/QuestionPage';
import Result from './components/Result/Result';
import StartPage from './components/StartPage/StartPage';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/results'>
            <Result/>
          </Route>
          <Route path='/questions'>
          <QuestionPage/>
          </Route>
          <Route path='/' exact> 
            <StartPage/>
          </Route>
        </Switch>
      </Router>
     
     
     
    </div>
  );
}

export default App;
