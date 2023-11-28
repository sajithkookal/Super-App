import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './pages/Registration'
import Genre from './pages/Genre';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/register' element={<Registration />} />
          <Route exact path='/genre' element={<Genre />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
