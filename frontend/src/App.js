import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './pages/HomeView'; // Ruta corregida
import Login from './Auth/Login';
import Register from './Auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;