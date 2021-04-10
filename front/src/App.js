import './App.css';
import Room from './components/floors';
import Header from './components/header';
import { BrowserRouter, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='room'>
             <Room/>
        </div>
      </div>
    </div>

  );
}

export default App;
