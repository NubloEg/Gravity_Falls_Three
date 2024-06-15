import Dipper from "../../assets/Dipper.png";
import Mable from "../../assets/Mable.png";
import Bill from "../../assets/Bill.png";
import Stan from "../../assets/Stan.png";
import Waddles from "../../assets/Waddles.png";
import Wendy from "../../assets/Wendy.png";
import { Euler, Vector3 } from "three";

export enum CharacterName {
  Dipper = "Dipper",
  Mable = "Mable",
  Wendy = "Wendy",
  Stan = "Stan",
  Bill = "Bill",
  Waddles = "Waddles",
}

export const getCharacter = (name: CharacterName) => {
  switch (name) {
    case CharacterName.Dipper:
      return {
        name: CharacterName.Dipper,
        desciption:
          "Умный, доброжелательный, любопытный, любознательный и предприимчивый двенадцатилетний (тринадцатилетний в конце сериала) мальчик, проводящий лето с дядей Стэном в Гравити Фолз, штат Орегон, где он и его сестра Мэйбл постоянно сталкиваются с паранормальной стороной города. Вооружён дневником. Является одним из главных героев Гравити Фолз, исследующим тайны Хижины Чудес в течении лета.",
        model: "../../../public/model/Dipper/scene.gltf",
        position: new Vector3(0, -2, 0),
        rotate: new Euler(0, 3, 0),
        zoom: undefined,
        color: "#5478e3",
      };
    case CharacterName.Mable:
      return {
        name: CharacterName.Mable,
        desciption:
          "Жизнерадостная, энергичная, полна энтузиазма и свободно-настроена 12-летняя девочка (в конце сериала ей исполняется 13 лет), проводящая лето с дядей Стэном в Гравити Фолз, штат Орегон, где ей и Дипперу приходится постоянно сталкиваться с паранормальными явлениями города. Она относится к своей жизни намного проще, когда находится в новой обстановке, чем ее брат-близнец. Обожает свою свинку Пухлю. Является одним из главных героев этого сериала.",
        model: "../../../public/model/Mable/scene.gltf",
        position: new Vector3(4, -1, 1),
        rotate: new Euler(0, 1.3, 0),
        zoom: 1,
        color: "#e35476",
      };
    case CharacterName.Wendy:
      return {
        name: CharacterName.Wendy,
        desciption:
          "Девушка-подросток, живущая в Гравити Фолз, подрабатывающая в неполный рабочий день в Хижине Чудес.[5] Диппер влюблён в неё, и она это знает. В эпизоде «В бункер» он признаётся в любви. В эпизоде «Свинья путешественника во времени», она начинает встречаться с Робби во всех вариантах времени. Но в конечном варианте Пухля опрокидывает чашу с водой на Робби, после чего он уходит. Робби в эпизоде «Парнепокалипсис» загипнотизировал её. В конечном счёте она расстаётся с ним в этом же эпизоде. В колесе Билла её знак — пакет со льдом.",
        model: "../../../public/model/Wendy/scene.gltf",
        position: new Vector3(0, -0.8, 0),
        rotate: new Euler(0, 1.3, 0),
        zoom: 3,
        color: "#4cb188",
      };
    case CharacterName.Stan:
      return {
        name: CharacterName.Stan,
        desciption:
          "Двоюродный дедушка Диппера и Мэйбл Пайнс, постоянный житель городка Гравити Фолз. После многих лет мошенничества и преступлений он поселился в отдалённом городке Гравити Фолз, штат Орегон[23], где руководит ловушкой для туристов, Хижиной Чудес.",
        model: "../../../public/model/Stan/scene.gltf",
        position: new Vector3(0, -1, 0),
        rotate: new Euler(0, 1.4, 0),
        zoom: 1.3,
        color: "#a44563",
      };
    case CharacterName.Bill:
      return {
        name: CharacterName.Bill,
        desciption:
          "Магическое создание, могущественный демон, способный войти в подсознание человека, а также главный антагонист сериала. Билл известен своим таинственным поведением и садистским юмором. Наводил ужас в Гравити Фолз, с тех пор, как был вызван Фордом Пайнсом более тридцати лет назад. Является главным антагонистом Гравити Фолз, несмотря на то, что он не играл важной роли вплоть до эпизода «Пленники разума».",
        model: "../../../public/model/Bill/scene.gltf",
        position: new Vector3(0, 0, 0),
        rotate: new Euler(0, 1.3, 0),
        zoom: undefined,
        color: "#532916",
      };
    case CharacterName.Waddles:
      return {
        name: CharacterName.Waddles,
        desciption:
          "Домашний, ручной поросёнок Мэйбл, которого она выиграла на Ярмарке Чудес в эпизоде «Свинья путешественника во времени».",
        model: "../../../public/model/Waddles/scene.gltf",
        position: new Vector3(0, 0, 0),
        rotate: new Euler(0, 0.7, 0),
        zoom: 3,
        color: "#e1a1c4",
      };
    default:
      return {
        name: CharacterName.Dipper,
        desciption:
          "Умный, доброжелательный, любопытный, любознательный и предприимчивый двенадцатилетний (тринадцатилетний в конце сериала) мальчик, проводящий лето с дядей Стэном в Гравити Фолз, штат Орегон, где он и его сестра Мэйбл постоянно сталкиваются с паранормальной стороной города. Вооружён дневником. Является одним из главных героев Гравити Фолз, исследующим тайны Хижины Чудес в течении лета.",
        model: "../../../public/model/Waddles/scene.gltf",
        position: new Vector3(0, -2, 0),
        rotate: new Euler(0, 3, 0),
        zoom: undefined,
        color: "#5478e3",
      };
  }
};

export const getImageCharacters = (name: CharacterName) => {
  switch (name) {
    case CharacterName.Dipper:
      return Dipper;
    case CharacterName.Mable:
      return Mable;
    case CharacterName.Wendy:
      return Wendy;
    case CharacterName.Stan:
      return Stan;
    case CharacterName.Bill:
      return Bill;
    case CharacterName.Waddles:
      return Waddles;
    default:
      break;
  }
};
