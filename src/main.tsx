import { createRoot } from 'react-dom/client';

import App from './app/App.tsx';
import CareersPage from './app/careers/page.tsx';
import ScrollToTop from './app/components/ScrollToTop';
import RouteScrollToTop from './app/components/RouteScrollToTop'; 


import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './styles/index.css';
import TermsAndConditionsPage from './app/terms-and-conditions/page';
import DisclaimerPage from './app/disclaimer/page';
import AffiliateDisclosurePage from './app/affiliate-disclosure/page';
import CookiePolicyPage from './app/cookie-policy/page';
 import PrivacyPolicyPage from './app/privacy-policy/page';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
     <RouteScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
      <Route path="/cookie-policy" element={<CookiePolicyPage />} />
    </Routes>
  </BrowserRouter>
);