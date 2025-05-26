import './App.css';
// import AllRoute from './components/AllRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes , Route} from "react-router-dom"
import LayoutDefault from './layout/LayoutDefault';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductAll from './components/Product/ProductAll';
import ProductDetail from './components/Product/ProductDetail/ProductDetail';
// import ProductDetail from './components/Product/Productdetail';


function App() {
  return (
    <>
      < Routes>
        {/* daaus / la trang chu */}
        <Route path = "/" element = { <LayoutDefault />} >
          <Route path ="/" element ={ <Home />} > 
            <Route index element = { <ProductAll />} />
            <Route path='products/:id' element = { <ProductDetail />} />
          </Route>
          <Route path = "/contact" element = { <Contact />} />
          <Route path = "/about" element ={<About />} />
        </Route>
      </Routes>
      {/* <AllRoute /> */}
    </>
  );
}

export default App;
