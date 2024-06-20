import { useLayoutEffect, useState } from "react";
import { CharacterName } from "./common/Characters/Characters";
import Loader from "./common/Loader/Loader";
import Character from "./components/Character/Character";
import Characters from "./components/Characters/Characters";
import Footer from "./components/Footer/Footer";
import Overview from "./components/Overview/Overview";
import Start from "./components/Start/Start";
import Menu from "./common/Menu/Menu";

function App() {
  const [load, setLoad] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoad(false);
      document.body.style.overflowY = "auto";
    }, 2000);
  }, []);

  return (
    <div>
      <Start />
      <Overview />
      <Characters />
      <Menu />
      {Object.keys(CharacterName).map((el, index) => (
        <Character key={el} index={index} name={el as CharacterName} />
      ))}
      <Footer />
      {load && <Loader />}
    </div>
  );
}

export default App;
