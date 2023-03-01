import { useState } from "react";
import { Link } from "react-router-dom";
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

  .input:last-child,
  .actions {
    margin-top: 30px;
  }

  .actions button[type="submit"] {
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
const LoginForm = () => {
  const [enteredID, setEnteredID] = useState("");
  const [enteredPW, setEnteredPW] = useState("");
  const [isError, setIsError] = useState(false);

  const idChangeHandler = (event) => {
    setEnteredID(event.target.value);
  };

  const pwChangeHandler = (event) => {
    setEnteredPW(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // 아이디, 비밀번호 검사
    // 1. 아이디와 비밀번호 공백여부 검사
    if (enteredID === "") {
      console.log("아이디를 적어주세요!");
    } else if (enteredPW === "") {
      console.log("비밀번호를 적어주세요!");
    }

    // 2. 아이디와 비밀번호 일치여부 검사(DB 연동 필요)
    const userData = {
      id: enteredID,
      pw: enteredPW,
    };

    console.log(userData);
    // initalize
    setEnteredID("");
    setEnteredPW("");
  };

  return (
    <UserDataForm onSubmit={submitHandler}>
      <div className="titles">
        <label htmlFor="userid">로그인</label>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            value={enteredID}
            onChange={idChangeHandler}
            id="userid"
            placeholder="아이디"
            autoFocus
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
      </div>
      <div className="actions">
        <Link to={"/home"}>
          <button type="submit">로그인</button>
        </Link>
      </div>
    </UserDataForm>
  );
};

export default LoginForm;
