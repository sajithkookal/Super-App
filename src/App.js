import { BrowserRouter,Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './pages/Registration'
import Genre from './pages/Genre';
import Browse from './pages/Browse';
import Movies from './pages/Movies';
import { isAuthenticated } from "./config";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Navigate to="/register"/>} />
          <Route exact path='/register' element={<Registration />} />
          <Route exact path='/genre' element={isAuthenticated? <Genre/> : <Navigate to="/register"/>} />
          <Route exact path='/browse' element={isAuthenticated? <Browse/> : <Navigate to="/register"/>}/>
          <Route exact path='/movies' element={isAuthenticated? <Movies/> : <Navigate to="/register"/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
