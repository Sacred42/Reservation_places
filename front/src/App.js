import './App.css';
import React from 'react';
import Room from './components/floors';
import Header from './components/header';
import SuccessWindow from './components/successWindow';
import Select from './components/Select';

function App() {
  return (
    <div className="App">
      <Header/>
      <SuccessWindow/>
      <div className='container'>
        <div className='room'>
             <Select/>
             <Room/>
        </div>
      </div>
    </div>

  );
}

export default App;
