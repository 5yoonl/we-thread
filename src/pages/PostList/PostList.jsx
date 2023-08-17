import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";
import CtaButton from "../../components/Button/CtaButton";
import "./PostList.scss";
const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [extendPostId, setExtendPostId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/listData.json")
      .then((response) => response.json())
      .then((result) => setPostList(result.data));
  }, []);

  const goToPostAddPage = () => {
    navigate("/post-add");
  };

  return (
    <Layout>
      <div className="postList">
        {postList.map((post) => {
          return (
            <Post
              postData={post}
              handlePostExtend={setExtendPostId}
              extendPostId={extendPostId}
            />
          );
        })}
      </div>
      <div className="postAddButton">
        <CtaButton buttonText="글쓰기" handleButtonAction={goToPostAddPage} />
      </div>
    </Layout>
  );
};

export default PostList;
