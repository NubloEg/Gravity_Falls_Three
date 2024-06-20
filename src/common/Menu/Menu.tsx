import { useEffect } from "react";
import s from "./Menu.module.scss";

export default function Menu() {
  const handleScroll = () => {
    if (document.querySelector("#menu")?.getBoundingClientRect().y === 0) {
      document.querySelector("#menu")?.classList.add(`${s.active}`);
    } else {
      document.querySelector("#menu")?.classList.remove(`${s.active}`);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="menu" className={s.menu}>
      <a href="#overview">Обзор</a>
      <a href="#start">Gravity Falls</a>
      <a href="#characters">Персонажи</a>
    </div>
  );
}
