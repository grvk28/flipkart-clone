import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/home';
import Login from './pages/home/login';
import Other from './other';
import IndividualIntervalsExample from './pages/home/slides';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/other' element={<Other/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/other1' element={<Other/>}/>
        <Route path='/p' element={<Home/>}/>
        <Route path='/other2' element={<Other/>}/>
        <Route path='/q' element={<Home/>}/>
        <Route path='/other3' element={<Other/>}/>
      </Routes>
    </div>
  );
}

export default App;
