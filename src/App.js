import Home from "./pages/Home/Home"
import Menu from './pages/Menu/Menu';
import About from './pages/about/About';
import Services from './pages/services/services';
import Team from './pages/Team/Team';
import Footer from './components/Footer/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import ScrollToTop from './components/Scrolle Top/ScrolleTop';
import Navbars from './components/Navbar/Navbar';
import Loading from './components/Loading/Loading';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Loading/>
    <ScrollToTop/>
    <Navbars/>
    <Home/>
    <About/>
    <Services/>
    <Menu/>
    <Team/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
export default App;