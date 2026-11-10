import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppDownloadModal } from './components/AppDownloadModal';
import { TeensPage } from './pages/TeensPage';
import { BrandsPage } from './pages/BrandsPage';

// Scroll to top automatically when navigating between pages
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FFF8EC] text-[#14112B]">
          {/* Global Sticky Navigation */}
          <Navbar onOpenDownloadModal={() => setDownloadModalOpen(true)} />

          {/* Main Routing Container */}
          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={<TeensPage onOpenDownloadModal={() => setDownloadModalOpen(true)} />}
              />
              <Route path="/brands" element={<BrandsPage />} />
              {/* Fallback to Teens home */}
              <Route
                path="*"
                element={<TeensPage onOpenDownloadModal={() => setDownloadModalOpen(true)} />}
              />
            </Routes>
          </main>

          {/* Global Deep Indigo Footer */}
          <Footer />

          {/* Download App Modal */}
          <AppDownloadModal
            isOpen={downloadModalOpen}
            onClose={() => setDownloadModalOpen(false)}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
