import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import CtaButton from "../../components/Button/CtaButton";
import { BASE_API_URL } from "../../utils/config";
import "./Login.scss";
const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const isButtonActive =
    userInfo.email.includes("@") &&
    userInfo.email.includes(".com") &&
    userInfo.password.length >= 5;

  const handleLoginInput = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const loginPromise = () => {
    return fetch(`${BASE_API_URL}users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });
  };

  const loginAction = () => {
    loginPromise()
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const { accessToken } = result;
        if (accessToken) {
          localStorage.setItem("token", accessToken);
          navigate("/post-list");
        }
      });
  };

  return (
    <Layout>
      <div className="login">
        <section className="logoSection">
          <div className="symbol">
            <img src="/images/symbol.png" alt="wecode_symbol" />
          </div>
          <div className="logo">
            <img src="images/logo.png" alt="wercode_logo" />
          </div>
        </section>
        <section className="inputSection">
          <Input
            name="email"
            placeholder="이메일"
            handleChange={(e) => handleLoginInput(e)}
          />
          <Input
            name="password"
            placeholder="비밀번호"
            type="password"
            handleChange={(e) => handleLoginInput(e)}
          />

          <CtaButton
            buttonText="로그인"
            disabled={!isButtonActive}
            handleButtonAction={() => loginAction()}
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
        </section>
      </div>
    </Layout>
  );
};

export default Login;
