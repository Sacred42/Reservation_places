import './App.css';
import Room from './components/floors';
import Header from './components/header';
import { BrowserRouter, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='room'>
        <Route path="/" component={Room}/>
        </div>
      </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
