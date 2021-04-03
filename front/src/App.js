import './App.css';
import Room from './src/room';
import Header from './src/header';
import { BrowserRouter, Route} from 'react-router-dom';
import {AjaxProvider} from './src/context/context';
import Ajax from './src/services/ajax';



function App() {

  const AjaxReq = new Ajax();
  return (
    <AjaxProvider value ={AjaxReq}>
    <BrowserRouter>
    
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='room'>
        <Route path="/" component={Room} />
        </div>
      </div>
    
    </div>
    
    </BrowserRouter>
    </AjaxProvider>
  );
}

export default App;
