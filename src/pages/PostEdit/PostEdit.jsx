import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import CtaButton from "../../components/Button/CtaButton";
import { BASE_API_URL } from "../../utils/config";
import "./PostEdit.scss";

const PostAdd = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    content: "",
    nickname: "",
    profileImage: "",
  });
  const lastPageHistory = -1;
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${BASE_API_URL}posts/${id}`, {
      headers: { "Content-Type": "application/json", authorization: token },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        const { content, nickname, profileImage } = data;

        setPostData({
          content,
          nickname,
          profileImage,
        });
      });
  }, []);

  const editPost = () => {
    fetch(`${BASE_API_URL}posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", authorization: token },
      body: JSON.stringify({ content }),
    }).then((res) => res.ok && navigate("/post-list"));
  };

  const goBack = () => {
    if (!window.confirm("수정을 취소하시겠습니까?")) return;

    navigate(lastPageHistory);
  };

  const handleTextChange = (content) => {
    setPostData((prev) => ({ ...prev, content }));
  };

  const { content, profileImage, nickname } = postData;

  return (
    <Layout>
      <div className="postEdit">
        <div className="profileImageBox">
          <ProfileImage src={profileImage || "/images/elon.jpeg"} />
        </div>
        <div className="contentArea">
          <div className="userName">{nickname}</div>
          <div className="textArea">
            <textarea
              placeholder="스레드를 시작하세요"
              defaultValue={content}
              cols="30"
              rows="10"
              onChange={(e) => handleTextChange(e.target.value)}
            ></textarea>
          </div>
          <div className="actionButtonArea">
            <CtaButton buttonText="취소" handleButtonAction={goBack} />
            <CtaButton buttonText="게시" handleButtonAction={editPost} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostAdd;
