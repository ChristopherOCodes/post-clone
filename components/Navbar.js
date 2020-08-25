import React from "react";
import { css } from "emotion";
import {
  Navbar,
  NavbarBrand,
  NavBtnContainer,
  NavBtn,
  LoginBtn,
  SignupBtn
} from "./styles.js";

export const NavbarComp = (props) => {
  return (
    <Navbar>
      <NavbarBrand>
        <a
          href="null"
          className={css`
            display: inline-block;
            line-height: 0;
            margin: 30px 24px 0px 24px;
            color: black;
            text-transform: uppercase;
            width: 106px;
            height: 32px;
            text-decoration: none;
            background-color: transparent;
          `}
        >
          <span>Post-Clone</span>
        </a>
      </NavbarBrand>
      <NavBtnContainer>
        <NavBtn>
          <LoginBtn href="null">
            <span>Login</span>
          </LoginBtn>
        </NavBtn>
        <NavBtn altColor="black">
          <SignupBtn href="null">
            <span>Sign Up</span>
          </SignupBtn>
        </NavBtn>
      </NavBtnContainer>
    </Navbar>
  );
};
