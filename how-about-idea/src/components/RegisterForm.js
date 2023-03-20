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
  const [validID, setValidID] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [onTap, setOnTap] = useState({
    idTap: false,
    emailTap: false,
    pwTap: false,
    pw2Tap: false,
  });
  // const idChangeHandler = (event) => {
  //   setEnteredID(event.target.value);
  // };

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const pwChangeHandler = (event) => {
  //   setEnteredPW(event.target.value);
  // };

  // const pw2ChangeHandler = (event) => {
  //   setEnteredPW2(event.target.value);
  // };

  // keydown 'tap'
  // 아이디어 정리
  // 1. 처음에는 false
  // 2. 해당 input에서 tap을 누를 경우 발생
  document.addEventListener(
    "keydown",
    (e) => {
      const keyCode = e.keyCode;
      // console.log("pushed key" + e.key);

      let ele = document.activeElement.getAttribute("id");
      // console.log(ele);
      if (keyCode === 9) {
        if (ele === "userid") {
          setOnTap((prevOnTap) => {
            return { ...prevOnTap, idTap: true };
          });
        } else if (ele === "email") {
          setOnTap((prevOnTap) => {
            return { ...prevOnTap, emailTap: true };
          });
        } else if (ele === "password") {
          setOnTap((prevOnTap) => {
            return { ...prevOnTap, pwTap: true };
          });
        } else if (ele === "password2") {
          setOnTap((prevOnTap) => {
            return { ...prevOnTap, pw2Tap: true };
          });
        }
      }
    },
    false
  );
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
    // console.log("PW1: ", enteredPW);
    // console.log("PW2: ", confirmedPassword);
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

    // onkeydown, tap으로 변경
  };

  return (
    <UserDataForm
      onSubmit={submitHandler}
      validID={validID}
      validEmail={validEmail}
      validPassword={validPassword}
      validConfirmPassword={validConfirmPassword}
      firstClick={firstClick}
    >
      <div className="titles">
        <label htmlFor="userid">회원가입</label>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            onChange={(e) => {
              enteredID(e.target.value);
            }}
            onFocus={() => {
              setFirstClick(true);
            }}
            id="userid"
            placeholder="아이디"
            onBlur={isValidID}
            required
            // autoFocus
          />
        </div>

        {!validID && firstClick && onTap.idTap && (
          <p className="caution">
            2-10자의 영문과 숫자와 일부 특수문자(._-)만 사용하세요.
          </p>
        )}

        <div className="input">
          <input
            type="email"
            onChange={(e) => {
              enteredEmail(e.target.value);
            }}
            onFocus={() => {
              setFirstClick(true);
            }}
            id="email"
            placeholder="이메일 주소"
            onBlur={isValidEmail}
            required
          />
        </div>

        {!validEmail && firstClick && onTap.emailTap && (
          <p className="caution">이메일 형식을 확인해주세요.</p>
        )}

        <div className="input">
          <input
            type="password"
            onChange={(e) => {
              setEnteredPW(e.target.value);
              console.log("PW1: ", enteredPW);
            }}
            onFocus={() => {
              setFirstClick(true);
            }}
            id="password"
            placeholder="비밀번호"
            onBlur={isValidPassword}
            required
          />
        </div>

        {!validPassword && firstClick && onTap.pwTap && (
          <p className="caution">최소 8자, 대소문자, 특수문자를 사용하세요.</p>
        )}
        <div className="input">
          <input
            type="password"
            onChange={(e) => {
              setEnteredPW2(e.target.value);
            }}
            onFocus={() => {
              setFirstClick(true);
            }}
            id="password2"
            placeholder="비밀번호 재확인"
            onBlur={isValidConfirmPassword}
            required
          />
        </div>
      </div>
      {!validConfirmPassword && firstClick && onTap.pw2Tap && (
        <p className="caution">입력한 비밀번호를 확인해주세요.</p>
      )}
      <div className="actions">
        <button type="submit">가입하기</button>
      </div>
    </UserDataForm>
  );
};

export default RegisterForm;
