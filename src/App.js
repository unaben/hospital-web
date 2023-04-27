/* eslint-disable jsx-a11y/iframe-has-title */
import DoctorPanel from "./components/DoctorPanel";
import Footer from "./components/Footer";
import HeaderContent from "./components/HeaderContent";
import NavBar from "./components/NavBar";
import Packages from "./components/Packages";
import Posts from "./components/Posts";
import About from "./pages/About";
import BannerOne from "./pages/BannerOne";
import BannerTwo from "./pages/BannerTwo";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import "./App.css";

const App = () => {
  return (
    <>
      <header className="header bg-blue">
        <NavBar />
        <HeaderContent />
      </header>
      <main>
        <About />
        <BannerOne />
        <Services />
        <BannerTwo />
        <DoctorPanel />
        <Packages />
        <Posts />
        <Contacts />
      </main>
      <footer id="footer" className="footer text-center">
        <Footer />
      </footer>
    </>
  );
};

export default App;
