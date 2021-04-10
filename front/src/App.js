import './App.css';
import Room from './components/floors';
import Header from './components/header';
import SuccessWindow from './components/successWindow';

function App() {
  return (
    <div className="App">
      <Header/>
      <SuccessWindow/>
      <div className='container'>
        <div className='room'>
             <Room/>
        </div>
      </div>
    </div>

  );
}

export default App;
