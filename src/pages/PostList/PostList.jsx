import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";
import CtaButton from "../../components/Button/CtaButton";
import { BASE_API_URL } from "../../utils/config";
import "./PostList.scss";

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [extendPostId, setExtendPostId] = useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getPostList = async () => {
    // const response = await fetch("/data/listData.json", {
    const response = await fetch(`${BASE_API_URL}posts/read`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    });

    const result = await response.json();
    setPostList(result.getThread);
  };

  const goToPostAddPage = () => {
    navigate("/post-add");
  };

  const handlePostDelete = (id) => {
    if (!window.confirm("게시글을 삭제하시겠습니까?")) return;

    fetch(`${BASE_API_URL}posts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", authorization: token },
    }).then((res) => {
      if (res.ok) {
        alert("삭제 완료");
        getPostList();
      }
    });
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <Layout>
      <div className="postList">
        {postList.map((post) => (
          <Post
            postData={post}
            handlePostExtend={setExtendPostId}
            extendPostId={extendPostId}
            handlePostDelete={() => handlePostDelete(post.postId)}
          />
        ))}
      </div>
      <div className="postAddButton">
        <CtaButton buttonText="글 쓰기" onClick={goToPostAddPage} />
      </div>
    </Layout>
  );
};

export default PostList;
