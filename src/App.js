import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages/components
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import About from "./components/About";
import Facts from "./components/Facts";
import Client from "./components/Client";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Supliers from "./components/Supliers";
import CardSlider from "./components/CardSlider";
import ImageViewer from "./components/ImageViewer";
import FooterHero from "./components/FooterHero";
import TabChanges from "./components/TabChanges";
import Cursor from "./components/Cursor";
import AnHeader from "./pages/Androidappdevelop/AnHeader"; // Adjust path if necessary
import ContentAndroid from "./components/ContentAndroid";
import IpHeader from "./pages/iphoneappdevelop/IpHeader";
// import IpaHeader from "./pages/ipadappdev/IpaHeader";
import DiHeader from "./pages/Digitalmarketing/DiHeader";
import HeaderSer from "./pages/ProfessionalITService/HeaderSer";
import HeaderSe from "./pages/SeoDevelop/HeaderSe";
import HeaderSw from "./pages/SoftwareDevelopment/HeaderSw";
import HeaderswSol from "./pages/SoftwareSolutions/HeaderswSol";
import HeaderWeb from "./pages/WebsiteDevelop/HeaderWeb";
import HeaderOn from "./pages/OnlineMarketing/HeaderOn";
import HeaderClo from "./pages/CloudSol/HeaderClo";
import HeaderEm from "./pages/EmerTech/HeaderEm";
import HeaderIct from "./pages/HeaderIct/HeaderIct";
import HeaderCy from "./pages/CyberSec/HeaderCy";
import HeaderInt from "./pages/DataIntell/HeaderInt";
import HeaderIn from "./pages/InternetPro/HeaderIn";
import IpaHeader from "./pages/IpadappDev/IpaHeader";
import HybridApp from "./pages/HybridApp/HyHeader";
import NatHeader from "./pages/NativeCloud/NatHeader";
import LowHeader from "./pages/LowcodeApp/LowHeader";
import HeaderEc from "./pages/Ecommerce/HeaderEc";
import Marquee from "./components/Marquee";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Common Header */}
        {/* <Header menuOpen={menuOpen} toggleMenu={toggleMenu} /> */}

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Marquee />
                <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
                <HeroSection />
                <TabChanges />
                <Service />
                <CardSlider />
                <About />
                <Facts />
                <Client />
                <Contact />
                <Supliers />
                <Testimonial />
                <ImageViewer />
                <FooterHero />
                <Footer />
                {/* <ContentAndroid /> */}
              </>
            }
          />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<HeroSection />} />
          <Route path="/android-app-development" element={<AnHeader />} />
          <Route path="/iphone-app" element={<IpHeader />} />
          <Route path="/ipad-app" element={<IpaHeader />} />
          <Route path="/hybrid-app" element={<HybridApp />} />
          {/* <Route path="/digital" element={<DiHeader />} /> */}
          <Route path="/seo" element={<HeaderSe />} />
          <Route path="/professionalservice" element={<HeaderSer />} />
          <Route path="/softwaredevelopment" element={<HeaderSw />} />
          <Route path="/softwareSolution" element={<HeaderswSol />} />
          <Route path="/websitedevelop" element={<HeaderWeb />} />
          <Route path="/onlinemarketing" element={<HeaderOn />} />
          <Route path="/cloud" element={<HeaderClo />} />
          <Route path="/emertech" element={<HeaderEm />} />
          <Route path="/ict" element={<HeaderIct />} />
          <Route path="/cybersec" element={<HeaderCy />} />
          <Route path="/internet" element={<HeaderIn />} />
          <Route path="/datainten" element={<HeaderInt />} />
          <Route path="/nativecloud" element={<NatHeader />} />
          <Route path="/lowcode" element={<LowHeader />} />
          <Route path="/ecommerce" element={<HeaderEc />} />
        </Routes>

        {/* Common Footer */}
        {/* <Cursor /> */}
      </div>
    </Router>
  );
}

export default App;
