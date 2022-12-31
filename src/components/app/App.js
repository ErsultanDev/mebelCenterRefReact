import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";

import "../../style/main.scss";
import "../../style/bootstrap.min.scss";
import AppBanner from "../appBanner/AppBanner";
import Catalog from "../catalog/Catalog";
import Major from "../major/Major";
import PrimeCard from "../primeCard/PrimeCard";
import Footer from "../footer/Footer";
const App = () => {
  return (
    <div className="">
      <AppHeader />
      <AppBanner />
      <Catalog />
      <Major />
      <PrimeCard />
      <Footer />
      {/* <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main> */}
    </div>
  );
};

export default App;
