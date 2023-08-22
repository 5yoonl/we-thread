import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import CtaButton from "../../components/Button/CtaButton";
import Header from "../../components/Header/Header";
import InputSection from "../../components/InputSection/InputSection";
import { BASE_API_URL } from "../../utils/config";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    checkPassword: "",
    nickname: "",
    firstNumber: "010",
    lastNumber: "",
    birthday: "",
  });

  console.log(userInfo);

  const handleSignupButton = () => {
    fetch(`${BASE_API_URL}users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
        nickname: userInfo.nickname,
        phoneNumber: `${userInfo.firstNumber}${userInfo.firstNumber}`,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((result) => {
        if (result.message === "user is created") {
          navigate("/sign-up-success");
        }
      });
  };

  const handleSignupInput = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
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
        <form className="inputArea" onChange={handleSignupInput}>
          <div className="articleTitle">회원가입</div>
          <InputSection pageTitle="기본 정보">
            <Input name="email" placeholder="이메일" />
            <Input name="password" type="password" placeholder="비밀번호" />
            <Input
              name="checkPassword"
              type="password"
              placeholder="비밀번호 확인"
            />
          </InputSection>
          <InputSection pageTitle="닉네임">
            <Input name="nickname" placeholder="닉네임" />
          </InputSection>
          <InputSection pageTitle="전화번호">
            <div className="phoneNumberInput">
              <select
                className="selectBox"
                defaultValue="010"
                name="firstNumber"
              >
                {PHONE_NUM_PREFIX.map((prefix) => (
                  <option key={prefix} value={prefix}>
                    {prefix}
                  </option>
                ))}
              </select>
              <Input name="lastNumber" placeholder="전화번호" />
            </div>
          </InputSection>
          <InputSection pageTitle="생일">
            <Input name="birthday" placeholder="YYYY-MM-DD" />
          </InputSection>
        </form>
        <div className="buttonArea">
          <CtaButton
            buttonText="회원가입"
            disabled={!isButtonActive}
            onClick={handleSignupButton}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;

const PHONE_NUM_PREFIX = ["010", "011", "016", "018"];
