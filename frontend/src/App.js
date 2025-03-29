import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Auth/Register';
import Login from './Auth/Login';
import MapView from './pages/MapView'; // ✅ Importación correcta

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
