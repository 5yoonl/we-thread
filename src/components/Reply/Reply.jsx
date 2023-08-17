import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import "./Reply.scss";
import { dateFormatter } from "../../utils/dateFormatter";
const Reply = ({ replyData }) => {
  const { comment, commentId, userName, isMyReply, createdAt } = replyData;
  const formmatedDate = dateFormatter(createdAt);

  return (
    <div className="reply">
      <div className="profileImageBox">
        <ProfileImage type="small" src="/images/elon.jpeg" />
      </div>
      <div className="contentSection">
        <div className="replyInfo">
          <span className="userName">{userName}</span>
          <span>
            {formmatedDate}
            {isMyReply && <span>삭제 | 수정</span>}
          </span>
        </div>
        <div className="content">{comment}</div>
      </div>
    </div>
  );
};

export default Reply;
