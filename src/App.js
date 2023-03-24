import {Routes, Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Chat } from './components/Chat';




function App() {

  return(
    <div className="bg-slate-300 h-screen text-white flex">
      <img height="200px" alt="LOGO" src={logo}/>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
