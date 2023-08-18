import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import CtaButton from "../../components/Button/CtaButton";
import "./PostAdd.scss";
import { useNavigate } from "react-router-dom";
import { BASE_API_URL } from "../../utils/config";

const PostAdd = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [postInputValue, setPostInputValue] = useState("");
  const lastPageHistory = -1;
  const createPost = () => {
    fetch(`${BASE_API_URL}posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        content: postInputValue,
      }),
    }).then((res) => {
      if (res.ok) {
        navigate("/post-list");
      }
    });
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
