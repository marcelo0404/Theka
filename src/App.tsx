import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { Contact } from './pages/Contact';
import { Collection } from './pages/Collection';
import { About } from './pages/About';

function LayoutContainer() {
  const location = useLocation();

  // Rotas sem o Navbar e Footer
  const hideLayout = ['/login', '/register', '/forgot-password', '/reset-password'].includes(location.pathname);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Só renderiza se hideLayout for falso */}
      {!hideLayout && <Navbar />}
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutContainer />
    </BrowserRouter>
  );
}