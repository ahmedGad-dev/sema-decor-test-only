import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import Shop from './pages/shop/Shop';
//import Navigation from './components/navigation/Navigation'
import SignInUp from './pages/signIn-signUp/SignInUp'
import CheckOut from './pages/checkout/CheckOut';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div>     
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>}/>
          <Route path='shop/*' element={<Shop/>}/>
          <Route path='sign-in' element={<SignInUp/>}/>
          <Route path='checkout' element={<CheckOut/>}/>
        </Route>       
     </Routes>
     <Footer/>
    </div> 
  );
}

export default App;
