import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import MainPage from './containers/mainPage';
import UseStateHook from './components/useState/useStateHook';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Hellow!' element={<MainPage />} />
        <Route path='/hooks/useState' element={<UseStateHook />} />
        <Route path="/" element={<Navigate replace to='/Hellow!' />} />
      </Routes>
    </div>
  );
}

export default App;
