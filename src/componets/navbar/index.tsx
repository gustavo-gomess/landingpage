import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Linkedin from "../../assets/LinkedIn-icon.svg";
import Github from "../../assets/Github-icon.svg";
import Divider from "../../assets/divider.svg";
// import Theme from "../../assets/theme.svg";

import {
  ContainerNav,
  GradientBottom,
  GradientDiv,
  GradientDivMid,
  LeftSide,
  RightSide,
} from "./styles";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <GradientDiv />
      <GradientDivMid />
      <GradientBottom />
      <ContainerNav>
        <LeftSide>
          <img className="bounce-top" src={Logo} alt="" />
          <p
            className="p2"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
          <p className="p2">Projetos</p>
          <p className="p2">Artigos</p>
          <p
            className="p2"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contato
          </p>
          <p className="p2">Mais</p>
        </LeftSide>
        <RightSide>
          <img className="icon" src={Linkedin} alt="" />
          <img src={Divider} alt="" />
          <img className="icon" src={Github} alt="" />
          {/* <img className="icon" src={Theme} alt="" /> */}
        </RightSide>
      </ContainerNav>
    </>
  );
}
