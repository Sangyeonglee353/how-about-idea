import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainBackground from "../images/main_background.jpg";
import axios from "axios";
const RegisterCss = styled.div`
  width: 100vw;
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${mainBackground});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  .wrap {
    width: 100vw;
    height: 92vh;
    background: #00000099;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form {
    width: 90vw;
    height: 80vh;
    background: #ffffff;
    border-radius: 12px;
    max-width: 400px;
    transition: 0.8s;
    margin-top: ${(props) => props.css.top}vw;
    opacity: ${(props) => props.css.opacity};
  }

  .title {
    width: 100%;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    padding: 3vh 0;
  }

  .id_input {
    width: 70%;
    margin: 1vh 0 2vh 15%;
    .sub {
      font-size: 18px;
      font-weight: 700;
    }

    .id {
      width: 100%;
      padding: 0.5vh 5%;
      margin: 1vh 0 0.5vh 0;
      border-radius: 12px;
      border: 2px solid #00000055;
      display: flex;
    }

    input {
      width: 60%;
      border: 0;
    }

    .check {
      width: 40%;
      display: flex;
      justify-content: right;

      span {
        width: 70%;
        padding: 0.8vh 0;
        color: #00000099;
        background: #00000033;
        font-size: 11px;
        border-radius: 12px;
        text-align: center;
        font-weight: 700;
        cursor: pointer;
        transition: 0.3s;
      }
    }

    input:focus {
      outline: none;
    }

    input::placeholder {
      color: #00000077;
    }

    .warn {
      font-size: 10px;
      color: #eb5a5a;
      margin-left: 5%;
    }
  }

  .input {
    width: 70%;
    margin: 1vh 0 2vh 15%;

    .sub {
      font-size: 18px;
      font-weight: 700;
    }

    input {
      width: 100%;
      padding: 1.2vh 5%;
      margin: 1vh 0 0.5vh 0;
      border-radius: 12px;
      border: 2px solid #00000055;
    }

    input:focus {
      outline: none;
      border: 2px solid #000000;
    }

    input::placeholder {
      color: #00000077;
    }

    .warn {
      font-size: 10px;
      color: #eb5a5a;
      margin-left: 5%;
    }
  }

  .tos {
    margin-top: 3vh;
    font-size: 10px;
    width: 80%;
    margin-left: 10%;
    text-align: center;
  }

  .signup {
    width: 70%;
    margin-left: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
    padding: 1vh 0;
    background: ${(props) =>
      props.isvaild.id &&
      props.isvaild.email &&
      props.isvaild.pw &&
      props.isvaild.pw_check
        ? "#3CAEFF"
        : "#00000099"};
    border-radius: 12px;
    transition: 0.3s;
    cursor: pointer;
  }

  .right {
    height: 25px;
    color: #ffffff;
  }

  .warn1 {
    ${(props) => (!props.blur.blur1 || props.isvaild.id ? "display:none" : "")};
  }

  .warn2 {
    ${(props) =>
      !props.blur.blur2 || props.isvaild.email ? "display:none" : ""};
  }

  .warn3 {
    ${(props) => (!props.blur.blur3 || props.isvaild.pw ? "display:none" : "")};
  }

  .warn4 {
    ${(props) =>
      !props.blur.blur4 || props.isvaild.pw_check ? "display:none" : ""};
  }
`;

function Register() {
  const [account, setAccount] = useState({
    id: "",
    id_check: false,
    email: "",
    pw: "",
    pw_check: "",
  });

  const [blur, setBlur] = useState({
    blur1: false,
    blur2: false,
    blur3: false,
    blur4: false,
  });

  const [isvaild, setVaild] = useState({
    id: false,
    email: false,
    pw: false,
    pw_check: false,
  });

  const [css, setCss] = useState({
    opacity: 0,
    top: 200,
  });

  useEffect(() => {
    if (sessionStorage.getItem("howai_id") !== null) {
      alert("이미 로그인 중입니다");
      window.location.href = "/how-about-idea/";
    }

    setCss({
      opacity: 1,
      top: 0,
    });
  }, []);

  useEffect(() => {
    let emailtest = /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let pwtest =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;

    setVaild({
      id: account.id.length > 6 && account.id_check,
      email: emailtest.test(account.email),
      pw: pwtest.test(account.pw),
      pw_check:
        pwtest.test(account.pw_check) && account.pw_check === account.pw,
    });
  }, [account]);

  // 백엔드_회원가입 데이터 전달
  const SignUpHandler = (props) => {
    const data = {
      userId: props.id,
      userEmail: props.email,
      userPassword: props.pw,
      userPasswordCheck: props.pw_check,
    };
    axios
      .post("http://localhost:8080/how-about-idea", data)
      .then((response) => {
        console.log("SignUp Success!!");
      })
      .catch((error) => {
        console.log("SignUp Faild!!");
      });
  };

  return (
    <RegisterCss css={css} isvaild={isvaild} blur={blur}>
      <div className="wrap">
        <div className="form">
          <p className="title">회원가입</p>

          <div className="id_input">
            <p className="sub">아이디</p>
            <div className="id">
              <input
                type="text"
                placeholder="howai"
                onInput={(e) => {
                  setAccount({
                    ...account,
                    id: e.target.value,
                    id_check: false,
                  });
                }}
                onBlur={() => {
                  setBlur({ ...blur, blur1: true });
                }}
              />

              <div className="check">
                <span
                  onClick={() => {
                    if (account.id.length >= 4) {
                      setAccount({ ...account, id_check: true });
                      alert("사용가능한 아이디입니다");
                    } else alert("아이디는 4자리 이상으로 설정해주세요");
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.background = "#3CAEFF";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#00000099";
                    e.target.style.background = "#00000033";
                  }}
                >
                  중복확인
                </span>
              </div>
            </div>

            {account.id_check && (
              <span className="warn warn1">
                아이디는 4자리 이상으로 설정해주세요
              </span>
            )}
            {!account.id_check && (
              <span className="warn warn1">아이디 중복확인을 해주세요</span>
            )}
          </div>

          <div className="input">
            <p className="sub">이메일</p>
            <input
              type="text"
              placeholder="howai@howai.com"
              onInput={(e) => {
                setAccount({ ...account, email: e.target.value });
              }}
              onBlur={() => {
                setBlur({ ...blur, blur2: true });
              }}
            />
            <span className="warn warn2">이메일 주소를 입력해주세요</span>
          </div>

          <div className="input">
            <p className="sub">비밀번호</p>
            <input
              type="password"
              placeholder="특수문자 포함 10자리"
              onInput={(e) => {
                setAccount({ ...account, pw: e.target.value });
              }}
              onBlur={() => {
                setBlur({ ...blur, blur3: true });
              }}
            />
            <span className="warn warn3">
              비밀번호는 특수문자 포함 10자리 이상으로 설정해주세요
            </span>
          </div>

          <div className="input">
            <p className="sub">비밀번호 확인</p>
            <input
              type="password"
              placeholder="비밀번호 재입력"
              onInput={(e) => {
                setAccount({ ...account, pw_check: e.target.value });
              }}
              onBlur={() => {
                setBlur({ ...blur, blur4: true });
              }}
            />

            <span className="warn warn4">비밀번호가 다릅니다</span>
          </div>

          <p className="tos">
            {" "}
            가입하기를 누르면
            <span className="strong-blue"> 이용약관</span>과{" "}
            <span className="strong-blue">개인정보취급방침</span>에 <br />{" "}
            동의한 것으로 간주합니다.
          </p>

          <p
            className="signup"
            onClick={() => {
              if (!isvaild.id) {
                if (!account.id_check) alert("아이디 중복확인을 해주세요");
                else alert("아이디는 4자리 이상 설정해주세요");
              } else if (!isvaild.email) alert("이메일 주소를 확인해주세요");
              else if (!isvaild.pw)
                alert("비밀번호는 특수문자 포함 10자리 이상으로 설정해주세요");
              else if (!isvaild.pw_check) alert("비밀번호가 서로 다릅니다");
              else {
                sessionStorage.setItem("howai_id", account.id);
                SignUpHandler(account);
                window.location.href = "/how-about-idea/";
              }
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-right"
              className="right"
            />
          </p>
        </div>
      </div>
    </RegisterCss>
  );
}

export default Register;
