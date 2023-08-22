import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import CtaButton from "../../components/Button/CtaButton";
import InputSection from "../../components/InputSection/InputSection";
import { BASE_API_URL } from "../../utils/config";
import "./Login.scss";

const EMAIL_REGEX =
  /^([\w._-])*[a-zA-Z0-9]+([\w._-])*([a-zA-Z0-9])+([\w._-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;

const LOGIN_ERRORS = {
  INVALID_EMAIL: "존재하지 않는 계정입니다.",
  INVALID_PASSWORD: "비밀번호가 올바르지 않습니다.",
};

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;

  const isUserInfoValid = EMAIL_REGEX.test(email) && password.length >= 5;

  const handleLoginInput = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    fetch(`${BASE_API_URL}users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        const { accessToken, message } = result;
        if (accessToken) {
          localStorage.setItem("token", accessToken);
          alert("환영합니다!");
          navigate("/post-list");

          return;
        }

        alert(LOGIN_ERRORS[message]);
      });
  };

  return (
    <Layout>
      <form className="login" onChange={handleLoginInput}>
        <section className="logoSection">
          <div className="symbol">
            <img src="/images/symbol.png" alt="wecode symbol" />
          </div>
          <div className="logo">
            <img src="images/logo.png" alt="wercode logo" />
          </div>
        </section>
        <InputSection>
          <Input name="email" placeholder="이메일" />
          <Input name="password" placeholder="비밀번호" type="password" />

          <CtaButton
            buttonText="로그인"
            disabled={!isUserInfoValid}
            onClick={handleLogin}
          />
          <div className="linkButtons">
            <div className="linkBtn">
              <Link to="/sign-up">회원가입</Link>
            </div>
            |
            <div className="linkBtn">
              <Link to="/">비밀번호 찾기</Link>
            </div>
          </div>
        </InputSection>
      </form>
    </Layout>
  );
};

export default Login;
