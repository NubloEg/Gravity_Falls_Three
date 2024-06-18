import s from "./Loader.module.scss";
import logo from "../../assets/logo.svg";

export default function Loader() {
  return (
    <div className={s.loader}>
      <img className={s.logo} src={logo} alt="" />
    </div>
  );
}
