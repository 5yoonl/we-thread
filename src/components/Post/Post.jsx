import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Reply from "../Reply/Reply";
import ProfileImage from "../ProfileImage/ProfileImage";
import "./Post.scss";
import { dateFormatter } from "../../utils/dateFormatter";
const Post = ({ postData, extendPostId, handlePostExtend }) => {
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

  const [replyValue, setReplyValue] = useState("");
  const formattedDate = dateFormatter(createdAt);

  const isExtend = extendPostId === postId;

  useEffect(() => {
    if (!isExtend) {
      setReplyValue("");
    }
  }, [isExtend]);

  const handleExpend = () => {
    const isClickSamePost = extendPostId === postId;
    handlePostExtend(postId);
    if (isClickSamePost) {
      handlePostExtend(0);
    }
  };
  const handleLikeAction = () => {
    console.log("좋아요를 누르자");
  };
  const handleReplySubmit = () => {
    console.log(replyValue);
  };
  return (
    <>
      <div className="post">
        <header>
          <div className="userInfo">
            <ProfileImage src={profileImage} />

            <div className="userName">{userName}</div>
          </div>
          <div className="postInfo">
            <div className="createdAt">{formattedDate}</div>
            {isMyPost && (
              <>
                <div className="options delete">삭제</div>
                <div className="options">수정</div>
              </>
            )}
          </div>
        </header>
        <div className="postContent" onClick={handleExpend}>
          {content}
        </div>
        <div className="countings">
          <div onClick={handleLikeAction}>좋아요 {likeCount}</div>
          <div>댓글 {commentsCount}</div>
        </div>
        <div className="likeAction">
          <img
            src={`/images/${isLiked ? "filled_heart" : "heart"}.png`}
            alt="heart"
          />
        </div>
      </div>
      {isExtend && (
        <div className="replyListBox">
          <div className="createReply">
            <Input
              placeholder="댓글을 작성하세요"
              name="reply"
              value={replyValue}
              handleChange={(e) => {
                setReplyValue(e.target.value);
              }}
            />
            <button onClick={handleReplySubmit}>댓글 게시</button>
          </div>
          <div className="replyList">
            {comments.map((comment) => {
              return <Reply replyData={comment} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
