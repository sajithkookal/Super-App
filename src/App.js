import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './pages/Registration'
import Genre from './pages/Genre';
import Browse from './pages/Browse';
import Movies from './pages/Movies'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/register' element={<Registration />} />
          <Route exact path='/genre' element={<Genre />} />
          <Route exact path='/browse' element={<Browse />} />
          <Route exact path='/movies' element={<Movies />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
