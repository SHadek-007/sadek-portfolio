import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import Project1 from './Pages/AllProjects/Progect1/Project1';
import Project2 from './Pages/AllProjects/Progect1/Project2';
import Project3 from './Pages/AllProjects/Progect1/Project3';

function App() {
  useEffect(()=>{
    AOS.init();
  },[]);
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/project1' element={<Project1></Project1>}></Route>
      <Route path='/project2' element={<Project2></Project2>}></Route>
      <Route path='/project3' element={<Project3></Project3>}></Route>
      </Routes>
    </div>
  );
}

export default App;
