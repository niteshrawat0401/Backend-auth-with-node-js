import './App.css';
import { Login } from './Component/Login';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Signup } from './Component/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
