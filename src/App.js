//import react bootstrap components
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

//import react router
import { Routes, Route } from "react-router-dom"

//import components
import Navbar from './components/navbar/navbar.component';
import LoginPage from './pages/loginpage/loginpage';
import MainPage from './pages/mainpage/mainpage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/login" element={ <LoginPage/> } />
      </Routes>
    </div>
  );
}

export default App;
