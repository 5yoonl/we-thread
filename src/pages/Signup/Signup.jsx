import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";

import "./Signup.scss";
import CtaButton from "../../components/Button/CtaButton";
import Header from "../../components/Header/Header";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    checkPassword: "",
    nickname: "",
    firstNumber: "010",
    lastNumber: "",
    birthday: "",
  });

  const handleSignupButton = () => {
    console.log("회원가입 하자");
  };

  const handleSignupInput = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const isEmailValid =
    userInfo.email.includes("@") && userInfo.email.includes(".com");
  const isPasswordValid =
    userInfo.password.length >= 5 &&
    userInfo.password === userInfo.checkPassword;
  const isButtonActive = isEmailValid && isPasswordValid;
  return (
    <Layout>
      <div className="signUp">
        <Header />
        <article className="inputArea">
          <div className="articleTitle">회원가입</div>
          <InputSection pageTitle="기본 정보">
            <Input
              name="email"
              placeholder="이메일"
              handleChange={(e) => handleSignupInput(e)}
            />
            <Input
              name="password"
              placeholder="비밀번호"
              handleChange={(e) => handleSignupInput(e)}
            />
            <Input
              name="checkPassword"
              placeholder="비밀번호 확인"
              handleChange={(e) => handleSignupInput(e)}
            />
          </InputSection>
          <InputSection pageTitle="닉네임">
            <Input
              name="nickname"
              placeholder="닉네임"
              handleChange={(e) => handleSignupInput(e)}
            />
          </InputSection>
          <InputSection pageTitle="전화번호">
            <div className="phoneNumberInput">
              <select
                className="selectBox"
                defaultValue="010"
                onChange={(e) => handleSignupInput(e)}
                name="firstNumber"
              >
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="018">018</option>
              </select>
              <Input
                name="lastNumber"
                placeholder="전화번호"
                handleChange={(e) => handleSignupInput(e)}
              />
            </div>
          </InputSection>
          <InputSection pageTitle="생일">
            <Input
              name="birthday"
              placeholder="YYYY-MM-DD"
              handleChange={(e) => handleSignupInput(e)}
            />
          </InputSection>
        </article>
        <div className="buttonArea">
          <CtaButton
            buttonText="회원가입"
            disabled={!isButtonActive}
            handleButtonAction={() => handleSignupButton()}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;

export const InputSection = ({ pageTitle, children }) => {
  return (
    <section className="inputSection">
      <div className="inputSectionTitle">{pageTitle}</div>
      <div className="inputSectionChildtren">{children}</div>
    </section>
  );
};
