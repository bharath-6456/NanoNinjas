import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup.js';
import About from './screens/About.js';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Pricelist from './screens/Pricelist.js';
import RegistrationForm from './screens/RegistrationForm.js';
import OrderSuccess from './screens/OrderSuccess.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/Signup" element={<Signup/>}/>
          <Route exact path="/pricelist" element={<Pricelist/>}/>
           <Route exact path="/about" element={<About/>}/> 
          <Route exact path="/registrationForm" element={<RegistrationForm/>}/>
          <Route exact path="/oderSuccess" element={<OrderSuccess/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
