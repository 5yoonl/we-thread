import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";
import Header from "../../components/Header/Header";
import "./PostList.scss";
const PostList = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    fetch("/data/listData.json")
      .then((response) => response.json())
      .then((result) => setPostList(result.data));
  }, []);
  return (
    <Layout>
      <div className="postList">
        {postList.map((post) => {
          return <Post postData={post} />;
        })}
      </div>
    </Layout>
  );
};

export default PostList;
