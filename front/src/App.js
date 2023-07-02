import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Item from './item';
import Update from './update';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Item />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>

      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
