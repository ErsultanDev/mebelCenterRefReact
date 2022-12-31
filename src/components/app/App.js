import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";

import "../../style/main.scss";
import "../../style/bootstrap.min.scss";
import AppBanner from "../appBanner/AppBanner";
const App = () => {
  return (
    <div className="">
      <AppHeader />
      <AppBanner/>
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
