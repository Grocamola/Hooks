import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import MainPage from './containers/mainPage';
import UseStateHook from './components/useState/useStateHook';
import UseEffectHook from './components/useEffect/useEffectHook';
import UseRef from './components/useRef/useRef';
import UseReducer from './components/useReducer/useReducer';
import UseContext from './components/useContext/useContext';
import FetchData from './components/data-fetch/fetchData';
import Signin from './components/_projects/signinForm/signin';
import MemoryCard from './components/_projects/memoryCardGame/memoryCards';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Hellow!' element={<MainPage />} />
        <Route path='/hooks/useState' element={<UseStateHook />} />
        <Route path='/hooks/useEffect' element={<UseEffectHook />} />
        <Route path='/hooks/useRef' element={<UseRef />} />
        <Route path='/hooks/useReducer' element={<UseReducer />} />
        <Route path='/hooks/useContext' element={<UseContext />} />
        <Route path='/hooks/fetching-data' element={<FetchData />} />
        <Route path='/projects/signinForm' element={<Signin />} />
        <Route path='/projects/memory-cards' element={<MemoryCard />} />
        <Route path="/" element={<Navigate replace to='/Hellow!' />} />
      </Routes>
    </div>
  );
}

export default App;
