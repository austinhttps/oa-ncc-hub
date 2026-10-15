import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TimelinesPage } from './pages/TimelinesPage';
import { StandardsPage } from './pages/StandardsPage';
import { RequestPage } from './pages/RequestPage';
import './index.css';

// Component to handle auto-scrolling to top or hash anchor on route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/services/" element={<ServicesPage />} />
          <Route path="/timelines/" element={<TimelinesPage />} />
          <Route path="/standards/" element={<StandardsPage />} />
          <Route path="/request/" element={<RequestPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
