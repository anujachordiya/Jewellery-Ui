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
    <div className="">
      <Navigation />
      <div className="mx-16 mb-16">
        <Banner />
        <BhimaAdvantages />
        <ExploreJewellery />
        <JewelleryBanner/>
        <BridalCollection />
        <StoreNearMe />
        <AboutUs />
        <FollowUs />
        <InformationCard/>
        <Footer/>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p className='text-gray-600 font-semibold '>hello ji</p>
    //   </header>
    // </div>
  );
}

export default App;
