import CustomerReview from "../components/CustomerReview";
import HeroSection from "../components/HeroSection";
import AboutUs from "./aboutUs/AboutUs";
import OurServices from "./services/OurServices";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <AboutUs />
      <OurServices />
      <CustomerReview />
    </div>
  );
};

export default Home;
