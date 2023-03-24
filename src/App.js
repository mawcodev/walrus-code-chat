import {Routes, Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
//import logo from './logo.svg';
import morsa from './morsa.jpg';
import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';




function App() {

  return(
    <div className="bg-slate-300 h-screen">
      <img height="150px" alt="LOGO" src={morsa}/>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Home />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
