import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import "./PostAdd.scss";
import CtaButton from "../../components/Button/CtaButton";
import { useNavigate } from "react-router-dom";

const PostAdd = () => {
  const navigate = useNavigate();
  const [postInputValue, setPostInputValue] = useState("");
  const lastPageHistory = -1;
  const createPost = () => {
    console.log("게시글 만들자");
  };

  const goBack = () => {
    navigate(lastPageHistory);
  };

  const handleTextChange = (value) => {
    setPostInputValue(value);
  };

  return (
    <Layout>
      <div className="postAdd">
        <div className="profileImageBox">
          <ProfileImage src="/images/elon.jpeg" />
        </div>
        <div className="contentArea">
          <div className="userName">wecode</div>
          <div className="textArea">
            <textarea
              placeholder="스레드를 시작하세요"
              value={postInputValue}
              cols="30"
              rows="10"
              onChange={(e) => handleTextChange(e.target.value)}
            ></textarea>
          </div>
          <div className="actionButtonArea">
            <CtaButton buttonText="취소" handleButtonAction={goBack} />
            <CtaButton buttonText="게시" handleButtonAction={createPost} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostAdd;
