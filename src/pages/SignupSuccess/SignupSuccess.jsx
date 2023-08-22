import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import CtaButton from "../../components/Button/CtaButton";
import "./SignupSuccess.scss";

const SignupSuccess = () => {
  const navigate = useNavigate();
  const handleSignupSuccessButton = () => {
    navigate("/");
  };
  return (
    <Layout>
      <div className="signupSuccess">
        <Header />
        <div className="thumbnail">
          <img className="thumbnailSymbol" src="/images/circle.png" alt="" />
          <div className="thumbnailText">
            <div className="mainText">회원 가입되었습니다.</div>
            <div className="subText">이제 로그인 해주세요</div>
          </div>
        </div>
        <CtaButton buttonText="확인" onClick={handleSignupSuccessButton} />
      </div>
    </Layout>
  );
};

export default SignupSuccess;
