import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './pages/Registration'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/register' element={<Registration />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
