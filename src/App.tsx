import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { JournalsPage } from './pages/JournalsPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const basePath = import.meta.env.BASE_URL || '/';

  return (
    <HelmetProvider>
      <LanguageProvider>
        <MotionConfig reducedMotion="user">
          <BrowserRouter basename={basePath === './' ? '/' : basePath}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/treatments" element={<TreatmentsPage />} />
                <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
                <Route path="/journals" element={<JournalsPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blogs/:slug" element={<BlogDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MotionConfig>
      </LanguageProvider>
    </HelmetProvider>
  );
}
