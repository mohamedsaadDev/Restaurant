import React,{ useEffect, Suspense } from "react";
import ScrollToTop from './components/Scrolle Top/ScrolleTop';
import Loading from './components/Loading/Loading';
import AOS from "aos"
import "aos/dist/aos.css"
const NavbarsLazy = React.lazy(()=>import('./components/Navbar/Navbar'))
const HomeLazy = React.lazy(()=>import('./pages/Home/Home'))
const AboutLazy = React.lazy(()=>import('./pages/about/About'))
const ServicesLazy = React.lazy(()=>import('./pages/services/services'))
const MenuLazy = React.lazy(()=>import('./pages/Menu/Menu'))
const TeamLazy = React.lazy(()=>import('./pages/Team/Team'))
const ContactUsLazy = React.lazy(()=>import('./pages/ContactUs/ContactUs'))
const FooterLazy = React.lazy(()=>import('./components/Footer/Footer'))
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Loading/>
    <Suspense >
      <ScrollToTop/>
      <NavbarsLazy/>
      <HomeLazy/>
      <AboutLazy/>
      <ServicesLazy/>
      <MenuLazy/>
      <TeamLazy/>
      <ContactUsLazy/>
      <FooterLazy/>
    </Suspense>
    </>
  );
}
export default App;