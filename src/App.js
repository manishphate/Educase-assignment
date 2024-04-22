import './App.css';
import SignUp from './component/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Profile from './component/Profile';
import SignIn from './component/Signin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/profile'  element={<Profile/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
