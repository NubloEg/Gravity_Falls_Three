import { useLayoutEffect, useState } from "react";
import { CharacterName } from "./common/Characters/Characters";
import Loader from "./common/Loader/Loader";
import Character from "./components/Character/Character";
import Characters from "./components/Characters/Characters";
import Footer from "./components/Footer/Footer";
import Overview from "./components/Overview/Overview";
import Start from "./components/Start/Start";

function App() {
  const [load, setLoad] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return (
    <>
      <Start />
      <Overview />
      <Characters />
      {Object.keys(CharacterName).map((el, index) => (
        <Character key={el} index={index} name={el as CharacterName} />
      ))}
      <Footer  />
      {load && <Loader />}
    </>
  );
}

export default App;
