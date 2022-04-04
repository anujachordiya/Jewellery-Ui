import logo from "./logo.svg";
import "./App.css";
import BhimaAdvantages from "./components/BhimaAdvantages";
import ExploreJewellery from "./components/ExploreJewellery";
import StoreNearMe from "./components/StoreNearMe";
import BridalCollection from "./components/BridalCollection";
import AboutUs from "./components/AboutUs";
import FollowUs from "./components/FollowUs";
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import JewelleryBanner from "./components/JewelleryBanner";
import InformationCard from "./components/Information";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="sm:px-16 sm:py-8 lg:px-0 lg:py-0 ">
        <Navigation />
      </div>

      <div className="mx-16 mb-16">
        <Banner />
        <BhimaAdvantages />
        <ExploreJewellery />
        <JewelleryBanner />
        <BridalCollection />
        <StoreNearMe />
        <AboutUs />
        <FollowUs />
        <InformationCard />
        <Footer />
      </div>
    </>
  );
}

export default App;
