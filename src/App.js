import { Routes,Route,Navigate,BrowserRouter } from 'react-router-dom';
import './App.css';
import AddCart from './components/AddCart/AddCart';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Details from './components/Details/Details'
import Error from './components/Error/Error';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';
function App() {
  return (
    <div >
        
        
        
        <BrowserRouter>
        <Header></Header>
                <Routes>
                    <Route path='/' element={<Navigate to='/Shop'/>}/>
                    <Route path='/addCart' element={<AddCart/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/details' element={<Details/>}/>
                    <Route path='/product/:productKey' element={<ProductDetail/>}/>
                    <Route path='/*' element={<Error/>}/>
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
