import './App.css';
import React from 'react';
import Room from './components/GetRooms';
import Header from './components/Header';
import SuccessWindow from './components/SuccessWindow';
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
