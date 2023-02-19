import RegisterForm from "./RegisterForm.js";
import styled from "styled-components";
import React from 'react'
const RegisterBlock = styled.div`
  display: block;
  margin: 215px auto 0 auto;
  font-family: "Noto Sans KR", sans-serif;
  width: 388px;
  height: 450px;

  & p {
    margin-top: 28px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
    color: var(--color-main-grey);
  }

  & .strong-blue {
    font-weight: bold;
    color: var(--color-main-blue);
  }
`;
function Register() {
  return (
    <RegisterBlock>
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
