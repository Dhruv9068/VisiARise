import BannerSection from "./BannerSection";
import BestDeal from "./BestDeal";
import FeaturedSection from "./FeaturedSection.jsx";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero"; 
import Navbar from "./Navbar.jsx";
import Parallexeff from "./Parallexeff";
import Visiarise from "./Visiarise.jsx";

const Home = () => {
    return (
      <div>
      <Navbar />
       <Hero/>
       <Visiarise />
       <Features/>
       <Parallexeff />
       <BestDeal />
       <BannerSection />
       <FeaturedSection />
       <Footer />
       

       
      </div>
    );
  };
  
  export default Home;

  