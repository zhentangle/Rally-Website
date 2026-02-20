import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import LandingPage from '@/pages/LandingPage'
import FAQPage from '@/pages/FAQPage'
import SupportPage from '@/pages/SupportPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import DeepLinkPage from '@/pages/DeepLinkPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/poll/:id" element={<DeepLinkPage />} />
        <Route path="/media/:id" element={<DeepLinkPage />} />
        <Route path="/squad/:id" element={<DeepLinkPage />} />
        <Route path="/profile/:id" element={<DeepLinkPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
