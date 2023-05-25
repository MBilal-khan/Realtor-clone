import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ForgotPass from './pages/ForgotPass';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forgotPass' element={<ForgotPass />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
