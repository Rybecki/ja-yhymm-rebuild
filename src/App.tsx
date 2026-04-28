

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OfferIndexPage from './pages/OfferIndexPage';
import OfferSubPage from './pages/OfferSubPage';
import ObozyKoloniePage from './pages/ObozyKoloniePage';
import OfferObozySeasonPage from './pages/OfferObozySeasonPage';
import OfferLatoPage from './pages/OfferLatoPage';
import OfferLatoDetailPage from './pages/OfferLatoDetailPage';
import OfferZimaDetailPage from './pages/OfferZimaDetailPage';
import TopicSubPage from './pages/TopicSubPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ParentZonePage from './pages/ParentZonePage';
import ContactSubpage from './pages/ContactSubpage';
import RentalEBikesPage from './pages/RentalEBikesPage';
import RentalKayaksPage from './pages/RentalKayaksPage';
import RentalVipBusPage from './pages/RentalVipBusPage';
import RentalInflatablesPage from './pages/RentalInflatablesPage';
import RentalAutolawetaPage from './pages/RentalAutolawetaPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-nas" element={<AboutPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/aktualnosci" element={<NewsPage />} />
        <Route path="/wypozyczalnia/e-rowery" element={<RentalEBikesPage />} />
        <Route path="/wypozyczalnia/kajaki" element={<RentalKayaksPage />} />
        <Route path="/wypozyczalnia/vip-bus" element={<RentalVipBusPage />} />
        <Route path="/wypozyczalnia/autolaweta" element={<RentalAutolawetaPage />} />
        <Route path="/wypozyczalnia/dmuchance" element={<RentalInflatablesPage />} />
        <Route path="/kontakt/strefa-rodzica" element={<ParentZonePage />} />
        <Route path="/kontakt/regulaminy" element={<ContactSubpage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/oferta" element={<OfferIndexPage />} />
        <Route path="/oferta/obozy-i-kolonie/lato/:offerSlug" element={<OfferLatoDetailPage />} />
        <Route path="/oferta/obozy-i-kolonie/zima/:offerSlug" element={<OfferZimaDetailPage />} />
        <Route path="/oferta/obozy-i-kolonie/lato" element={<OfferLatoPage />} />
        <Route path="/oferta/obozy-i-kolonie/:season" element={<OfferObozySeasonPage />} />
        <Route path="/oferta/obozy-i-kolonie" element={<ObozyKoloniePage />} />
        <Route path="/oferta/:slug" element={<OfferSubPage />} />
        <Route path="/tematyka/:slug" element={<TopicSubPage />} />
      </Routes>
    </BrowserRouter>
  );
}
