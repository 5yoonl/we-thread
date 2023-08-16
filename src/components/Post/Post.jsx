import React from "react";
import "./Post.scss";

const Post = ({ postData }) => {
  const {
    postId,
    userName,
    profileImage,
    isMyPost,
    content,
    isLiked,
    likeCount,
    commentsCount,
    comments,
    createdAt,
  } = postData;

  const month = new Date(createdAt).getMonth() + 1;
  const isUnderOctober = month < 10;
  const formatDate = new Intl.DateTimeFormat("kr").format(new Date(createdAt));

  const createAtToFormat = isUnderOctober
    ? formatDate.substring(2, 11)
    : formatDate.substring(2, 12);

  return (
    <div className="post">
      <header>
        <div className="userInfo">
          <div className="profileImage">
            <img src={profileImage} alt="" />
          </div>
          <div className="userName">{userName}</div>
        </div>
        <div className="postInfo">
          <div className="createdAt">{createAtToFormat}</div>
          {isMyPost && (
            <>
              <div className="options delete">삭제</div>
              <div className="options">수정</div>
            </>
          )}
        </div>
      </header>
      <div className="postContent">{content}</div>
      <div className="countings">
        <div>좋아요 {likeCount}</div>
        <div>댓글 {commentsCount}</div>
      </div>
      <div className="likeAction">
        <img
          src={`/images/${isLiked ? "filled_heart" : "heart"}.png`}
          alt="heart"
        />
      </div>
    </div>
  );
};

export default Post;
