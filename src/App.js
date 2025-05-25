import './App.css';
import { Routes  , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LayoutDefault from './layout/LayoutDefault';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <>
    <Routes>
        {/* daaus / la trang chu */}
        <Route path="/" element ={<LayoutDefault/>}>
          <Route path='/' element ={<Home/>}/>
          <Route path='about' element ={<About/>}/>
          <Route path='contact' element ={<Contact/>}/>
        </Route>
      </Routes>
    
    </>
  );
}

export default App;
