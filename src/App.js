import React from 'react';
import HomePage from './components/homePage/homePage'
import {Route , Switch ,  BrowserRouter} from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <HomePage/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
