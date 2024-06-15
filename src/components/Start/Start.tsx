import ms from "../../assets/mysteryshack.png";
import logo from "../../assets/logo.svg";

import s from "./Start.module.scss";

export default function Start() {
  return (
    <>
      <div className={s.blockImg}>
        <img className={s.logo} src={logo} alt="" />
        <img className={s.img} src={ms} alt="" />
      </div>
    </>
  );
}
