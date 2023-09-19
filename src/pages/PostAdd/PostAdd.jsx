import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import CtaButton from "../../components/Button/CtaButton";
import { BASE_API_URL } from "../../utils/config";
import "./PostAdd.scss";

const PostAdd = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [postInputValue, setPostInputValue] = useState("");
  const lastPageHistory = -1;

  const createPost = () => {
    fetch(`${BASE_API_URL}posts/create`, {
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
        <div className="inputContainer">
          <ProfileImage src="/images/elon.jpeg" />
          <div className="contentArea">
            <div className="userName">wecode</div>
            <textarea
              className="textArea"
              placeholder="스레드를 시작하세요."
              value={postInputValue}
              cols="30"
              rows="10"
              onChange={(e) => handleTextChange(e.target.value)}
            />
          </div>
        </div>
        <div className="actionButtonArea">
          <CtaButton buttonText="취소" variant="whiteBg" onClick={goBack} />
          <CtaButton buttonText="게시" onClick={createPost} />
        </div>
      </div>
    </Layout>
  );
};

export default PostAdd;
