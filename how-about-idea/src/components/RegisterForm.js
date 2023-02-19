import { useState } from "react";
import styled from "styled-components";
import React from 'react'
const UserDataForm = styled.form`
  & .titles {
    font-size: 28px;
    font-weight: bold;
    color: var(--color-main-blue);
  }

  & .inputs{
    margin-top: 40px;
  }

  & .input input{
    width: 100%;
    height: 30px;
    border: 0px;
    border-bottom: 2px solid var(--color-main-grey);
    line-height: 30px;
  }

  & .input input:focus{
    outline: none;
  }

  & .input, .actions {
    margin-top: 30px;
  }

  & .actions button[type = submit] {
    width: 100%;
    height: 64px;
    background-color: var(--color-main-blue);
    border: 1px solid var(--color-main-blue);
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
`;
const RegisterForm = () => {
  const [enteredID, setEnteredID] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPW, setEnteredPW] = useState("");
  const [enteredPW2, setEnteredPW2] = useState("");

  const idChangeHandler = (event) => {
    setEnteredID(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const pwChangeHandler = (event) => {
    setEnteredPW(event.target.value);
  };

  const pw2ChangeHandler = (event) => {
    setEnteredPW2(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: enteredID,
      email: enteredEmail,
      pw: enteredPW,
      pw2: enteredPW2,
    };

    console.log(userData);
    // initalize
    setEnteredID("");
    setEnteredEmail("");
    setEnteredPW("");
    setEnteredPW2("");
  };

  return (
    <UserDataForm onSubmit={submitHandler}>
      <div className="titles">
        <label htmlFor="userid">회원가입</label>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            value={enteredID}
            onChange={idChangeHandler}
            id="userid"
            placeholder="아이디"
          />
        </div>
        <div className="input">
          <input
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            placeholder="이메일 주소"
          />
        </div>
        <div className="input">
          <input
            type="password"
            value={enteredPW}
            onChange={pwChangeHandler}
            placeholder="비밀번호"
          />
        </div>
        <div className="input">
          <input
            type="password"
            value={enteredPW2}
            onChange={pw2ChangeHandler}
            placeholder="비밀번호 재확인"
          />
        </div>
      </div>
      <div className="actions">
        <button type="submit">가입하기</button>
      </div>
    </UserDataForm>
  );
};

export default RegisterForm;
