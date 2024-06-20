import {
  CharacterName,
  getImageCharacters,
} from "../../common/Characters/Characters";
import s from "./Characters.module.scss";

export default function Characters() {
  return (
    <div id="characters" className={s.block}>
      <h1 className={s.title}>Персонажи</h1>
      <div className={s.line}></div>

      <div className={s.characters}>
        <a
          title="dipper"
          href={`#${CharacterName.Dipper}`}
          className={s.character}
        >
          <img
            className={s.characterImg}
            src={getImageCharacters(CharacterName.Dipper)}
            alt=""
          />
        </a>{" "}
        <a
          title="dipper"
          href={`#${CharacterName.Mable}`}
          className={s.character}
        >
          <img
            className={s.characterImg}
            src={getImageCharacters(CharacterName.Mable)}
            alt=""
          />
        </a>{" "}
        <a
          title="dipper"
          href={`#${CharacterName.Wendy}`}
          className={s.character}
        >
          <img
            className={s.characterImg}
            src={getImageCharacters(CharacterName.Wendy)}
            alt=""
          />
        </a>{" "}
        <a
          title="dipper"
          href={`#${CharacterName.Stan}`}
          className={s.character}
        >
          <img
            className={s.characterImg}
            src={getImageCharacters(CharacterName.Stan)}
            alt=""
          />
        </a>
        <a
          title="dipper"
          href={`#${CharacterName.Bill}`}
          className={s.character}
        >
          <img
            className={s.characterImg}
            src={getImageCharacters(CharacterName.Bill)}
            alt=""
          />
        </a>{" "}
        <a
          title="dipper"
          href={`#${CharacterName.Waddles}`}
          className={s.character}
        >
          <img
            className={s.characterImg}
            src={getImageCharacters(CharacterName.Waddles)}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
