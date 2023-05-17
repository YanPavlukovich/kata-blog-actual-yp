import { AppBar, Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import {
  removeUserData,
  selectIsAuth,
  selectUserData,
} from "../../store/slices/user-slice";
import { HomeButton } from "../home-button/HomeButton";
import { Profile } from "../profile/Profile";
import { HeaderStyle } from "./Header.style";

export const Header = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const { username, avatar } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(removeUserData());
  };
  return (
    <>
      <AppBar position="static" color="transparent">
        <HeaderStyle>
          <Toolbar sx={{ width: "100%" }}>
            <HomeButton />
            {isAuth ? (
              <div className="authBtns">
                <Button
                  component={Link}
                  to={"/new-article"}
                  variant="outlined"
                  color="success"
                  style={{ textTransform: "capitalize" }}
                >
                  Create article
                </Button>
                <Profile author={{ username, image: avatar }} />
                <Button
                  style={{ textTransform: "capitalize" }}
                  variant="outlined"
                  onClick={onLogout}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <div className="btns">
                <Button
                  size="large"
                  style={{ textTransform: "capitalize" }}
                  variant="text"
                  component={Link}
                  to={"/sign-in"}
                >
                  Sign in
                </Button>
                <Button
                  size="large"
                  style={{ textTransform: "capitalize" }}
                  variant="outlined"
                  component={Link}
                  to={"/sign-up"}
                  color="success"
                >
                  Sign up
                </Button>
              </div>
            )}
          </Toolbar>
        </HeaderStyle>
      </AppBar>
    </>
  );
};
