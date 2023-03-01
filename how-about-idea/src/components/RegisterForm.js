import { useEffect, useState } from "react";
import styled from "styled-components";
import React from "react";
const UserDataForm = styled.form`
  .titles {
    font-size: 28px;
    font-weight: bold;
    color: var(--color-main-blue);
  }

  .inputs {
    margin-top: 40px;
  }

  .input input {
    width: 100%;
    height: 30px;
    border: 0px;
    border-bottom: 2px solid var(--color-main-grey);
    line-height: 30px;
  }

  .input input:focus {
    outline: none;
    border-bottom: 2px solid var(--color-main-blue);
  }

  .input,
  .actions {
    margin-top: 30px;
  }

  .actions button[type="submit"] {
    width: 100%;
    height: 64px;
    /* background-color: var(--color-main-blue);
    border: 1px solid var(--color-main-blue); */
    background-color: ${(props) =>
      props.validID &&
      props.validEmail &&
      props.validPassword &&
      props.validConfirmPassword
        ? "var(--color-main-blue)"
        : "var(--color-sub-grey)"};
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-main-blue);
    }
  }

  .caution {
    color: red;
    margin-top: 5px;
  }
`;
const RegisterForm = () => {
  const [enteredID, setEnteredID] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPW, setEnteredPW] = useState("");
  const [enteredPW2, setEnteredPW2] = useState("");
  const [validID, setValidID] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);

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

  // 1. 아이디 검사
  // 1.1 아이디 유효성 검사
  // 아이디 조건: 2-10자의 영문과 숫자와 일부 특수문자(._-)만 입력 가능
  const isValidID = (e) => {
    let regExp = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
    setValidID(regExp.test(e.target.value));
  };
  // 1.2 아이디 중복 검사(DB 연동 필요)

  // 2. 이메일 검사
  // 2.1 이메일 유효성 검사
  // 이메일 조건:
  const isValidEmail = (e) => {
    let regExp =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    setValidEmail(regExp.test(e.target.value));
  };
  // 2.2 이메일 중복 검사(DB 연동 필요)

  // 3. 비밀번호 검사
  // 3.1 비밀번호 유효성 검사
  // 비밀번호 조건: 최소 8자, 대소문자, 특수문자 포함
  const isValidPassword = (e) => {
    let regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    setValidPassword(regExp.test(e.target.value));
  };
  // 3.2 비밀번호 일치 검사
  const isValidConfirmPassword = (e) => {
    let confirmedPassword = e.target.value;
    // console.log(confirmedPassword);
    if (enteredPW !== confirmedPassword) {
      setValidConfirmPassword(false);
    } else {
      setValidConfirmPassword(true);
    }
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
    <UserDataForm
      onSubmit={submitHandler}
      validID={validID}
      validEmail={validEmail}
      validPassword={validPassword}
      validConfirmPassword={validConfirmPassword}
    >
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
            onBlur={isValidID}
            required
            autoFocus
          />
        </div>

        {!validID && (
          <p className="caution">
            2-10자의 영문과 숫자와 일부 특수문자(._-)만 사용하세요.
          </p>
        )}

        <div className="input">
          <input
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            placeholder="이메일 주소"
            onBlur={isValidEmail}
            required
          />
        </div>

        {!validEmail && <p className="caution">이메일 형식을 확인해주세요.</p>}

        <div className="input">
          <input
            type="password"
            value={enteredPW}
            onChange={pwChangeHandler}
            placeholder="비밀번호"
            onBlur={isValidPassword}
            required
          />
        </div>

        {!validPassword && (
          <p className="caution">최소 8자, 대소문자, 특수문자를 사용하세요.</p>
        )}
        <div className="input">
          <input
            type="password"
            value={enteredPW2}
            onChange={pw2ChangeHandler}
            placeholder="비밀번호 재확인"
            onBlur={isValidConfirmPassword}
            required
          />
        </div>
      </div>
      {!validConfirmPassword && (
        <p className="caution">입력한 비밀번호를 확인해주세요.</p>
      )}
      <div className="actions">
        <button type="submit">가입하기</button>
      </div>
    </UserDataForm>
  );
};

export default RegisterForm;
