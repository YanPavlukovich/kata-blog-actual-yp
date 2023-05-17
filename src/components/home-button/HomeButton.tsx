import { Link } from "react-router-dom";
import { HomeButtonStyle } from "./home-button.style";

export const HomeButton = () => {
  return (
    <HomeButtonStyle>
      <Link className="homeBtn" to={"/"}>
        Realworld Blog
      </Link>
    </HomeButtonStyle>
  );
};
