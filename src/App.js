
import './App.css';
import Login from './components/Login';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <pageNav />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={< Home />} />
      <Route path="*" element={<pagenotFound/>} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}
export default App;
