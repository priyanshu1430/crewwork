import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
