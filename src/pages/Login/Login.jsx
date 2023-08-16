import React, { useState } from "react";
import "./Login.scss";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import CtaButton from "../../components/Button/CtaButton";
const Login = () => {
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

  const loginAction = () => {
    console.log("로그인 하자");
    // fetch("api주소", {
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify({
    //     userInfo,
    //   }),
    // });
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
