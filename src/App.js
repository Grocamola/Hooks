import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import MainPage from './containers/mainPage';
import UseStateHook from './components/useState/useStateHook';
import UseEffectHook from './components/useEffect/useEffectHook';
import UseRef from './components/useRef/useRef';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Hellow!' element={<MainPage />} />
        <Route path='/hooks/useState' element={<UseStateHook />} />
        <Route path='/hooks/useEffect' element={<UseEffectHook />} />
        <Route path='/hooks/useRef' element={<UseRef />} />
        <Route path="/" element={<Navigate replace to='/Hellow!' />} />
      </Routes>
    </div>
  );
}

export default App;
