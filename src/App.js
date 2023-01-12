import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Navhead from './Components/Navhead'
import Home from './Pages/Home.jsx'
import Search  from './Pages/Serach';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Navhead/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="search" element={<Search/>} />
    </Routes>
    <Footer/>
      
    </>
  );
}

export default App;

