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

function App() {
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
/* <Loading/>
    <ScrollToTop/>
    <Navbars/>
    <Home/>
    <About/>
    <Services/>
    <Menu/>
    <Team/>
    <ContactUs/>
    <Footer/>*/