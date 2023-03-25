import React from "react";
import RegisterForm from "./RegisterForm.js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterBlock = styled.div`
  display: block;
  /* margin: 215px auto 0 auto; */
  margin: 21.5vh auto 0 auto;
  font-family: "Noto Sans KR", sans-serif;
  width: 388px;
  height: 450px;

  p {
    margin-top: 28px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
    color: var(--color-main-grey);
  }

  .strong-blue {
    font-weight: bold;
    color: var(--color-main-blue);
  }
  @media screen and (max-width: 430px) {
    width: calc(100vw - 40px);
    height: 100vh;
  }
`;

const PrevBtn = styled(FontAwesomeIcon)`
  /* width: 32px; */
  height: 27px;
  color: var(--color-main-grey);
  cursor: pointer;
`;

function Register() {
  const navigate = useNavigate();

  return (
    <RegisterBlock>
      <PrevBtn icon="fa-angle-left" onClick={() => navigate(-1)} />
      <RegisterForm />
      <p>
        가입하기를 누르면 <span className="strong-blue">이용약관</span>과{" "}
        <span className="strong-blue">개인정보취급방침</span>에 동의한 것으로
        간주합니다.
      </p>
    </RegisterBlock>
  );
}

export default Register;
