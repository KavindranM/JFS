import { BrowserRouter, Route,Router,Routes } from "react-router-dom";
import LoginFi from "./components/login";
import './App.css';
import SignUp from "./components/signup";
import SideBar from "./components/sidebar";
import Dashboard from "./pages/Home";
import About from "./pages/search";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Search from "./pages/search";
import Contact from "./pages/contact";
function App() {
  return (
    <div className="page">
        {/* <LoginFi/>  */}
      {/* <SignUp/> */}
      {/* <Login/> */}
         <BrowserRouter>
         <SideBar>
           <Routes>
            <Route path='/' element={<LoginFi />}></Route>
           <Route path='/home' element={<Home/>}></Route>
           <Route path='/search' element={<Search />}></Route>
           <Route path='/contact' element={<Contact />}></Route>
           <Route path='/analytics' element={<Analytics />}></Route>
           <Route path='/product' element={<Product />}></Route>
           <Route path='/productList' element={<ProductList />}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
          </Routes>
          </SideBar>
         </BrowserRouter>  
        
      </div>
  )
}

export default App;
