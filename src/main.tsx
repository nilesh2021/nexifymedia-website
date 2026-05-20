import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './styles/index.css';
import App from './app/App';
import CareersPage from './app/careers/page';
import TermsAndConditionsPage from './app/terms-and-conditions/page';
import DisclaimerPage from './app/disclaimer/page';
import AffiliateDisclosurePage from './app/affiliate-disclosure/page';
import CookiePolicyPage from './app/cookie-policy/page';
import PrivacyPolicyPage from './app/privacy-policy/page';
import SeoInternshipPune from './app/Internship/SeoInternshipPune';
import SeoInternshipMumbai from './app/Internship/SeoInternshipMumbai';
import RemoteSeoInternship from './app/Internship/RemoteSeoInternship';
import RouteScrollToTop from './app/components/RouteScrollToTop';
import BestAiToolsForMarketers from './app/Resources/BestAiToolsForMarketers';
import BestChatgptToolsForMarketers from './app/Resources/BestChatgptToolsForMarketers';
createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route
          path="/disclaimer"
          element={<DisclaimerPage />}
        />
        <Route
          path="/affiliate-disclosure"
          element={<AffiliateDisclosurePage />}
        />
        <Route
          path="/cookie-policy"
          element={<CookiePolicyPage />}
        />
        <Route
          path="/seo-internship-pune"
          element={<SeoInternshipPune />}
        />

        <Route
          path="/seo-internship-mumbai"
          element={<SeoInternshipMumbai />}
        />
        <Route
          path="/remote-seo-internship"
          element={<RemoteSeoInternship />}
        />
        <Route
          path="/best-ai-tools-for-marketers"
          element={<BestAiToolsForMarketers />}
        /><Route
  path="/best-chatgpt-tools-for-marketers"
  element={<BestChatgptToolsForMarketers />}
/>
      </Routes>
      
    </BrowserRouter>

  </HelmetProvider>
);