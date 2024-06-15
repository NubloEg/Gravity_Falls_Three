import { CharacterName } from "./common/Characters/Characters";
import Character from "./components/Character/Character";
import Characters from "./components/Characters/Characters";
import Footer from "./components/Footer/Footer";
import Overview from "./components/Overview/Overview";
import Start from "./components/Start/Start";

function App() {
  return (
    <>
      <Start />
      <Overview />
      <Characters />
      {Object.keys(CharacterName).map((el, index) => (
        <Character key={el} index={index} name={el as CharacterName} />
      ))}
      <Footer />
    </>
  );
}

export default App;
