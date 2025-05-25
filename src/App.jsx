import './App.css';
// import AllRoute from './components/AllRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes , Route} from "react-router-dom"
import LayoutDefault from './layout/LayoutDefault';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      < Routes>
        <Route path = "/" element = { <LayoutDefault />} >
          <Route path ="/" element ={ <Home />} />
          <Route path = "/contact" element = { <Contact />} />
          <Route path = "/About" element ={<About />} />
        </Route>
      </Routes>
      {/* <AllRoute /> */}
    </>
  );
}

export default App;
