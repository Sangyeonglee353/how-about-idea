import LoginForm from "./LoginForm";
import bottomSubImage from "../images/leaf_img.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
const LoginBlock = styled.div`
  display: block;
  margin: 215px auto 0 auto;
  font-family: "Noto Sans KR", sans-serif;
  width: 388px;
  height: 350px;

  & p {
    margin-top: 40px;
    text-align: center;
  }

  & .sub-images {
    margin-top: 60px;
    color: red;
  }

  & img {
    display: block;
    margin: 0 auto;
  }
  @media screen and (max-width: 500px) {
    width: calc(100vw - 40px);
    height: 100vh;
  }
`;

const RegisterLink = styled(Link)`
  color: black;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;

  &:active,
  :visited {
    color: var(--color-main-blue);
  }
`;
const Login = () => {
  return (
    <LoginBlock>
      <LoginForm />
      <p>
        아직 회원이 아니신가요?&nbsp;&nbsp;
        <RegisterLink to={"/register"}>회원가입</RegisterLink>
      </p>
      <div className="sub-images">
        <img src={bottomSubImage} alt="subImage" />
      </div>
    </LoginBlock>
  );
};

export default Login;
