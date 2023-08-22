import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import { dateFormatter } from "../../utils/dateFormatter";
import "./Reply.scss";

const Reply = ({ replyData }) => {
  const { comment, userName, isMyReply, createdAt } = replyData;
  const formmatedDate = dateFormatter(createdAt);

  return (
    <div className="reply">
      <ProfileImage type="small" src="/images/elon.jpeg" />
      <div className="contentSection">
        <div className="replyInfo">
          <span className="userName">{userName}</span>
          <div className="replyEditWrapper">
            <span className="date">{formmatedDate}</span>
            {isMyReply && (
              <>
                <span className="delete">삭제</span>
                <span className="edit">수정</span>
              </>
            )}
          </div>
        </div>
        <p className="content">{comment}</p>
      </div>
    </div>
  );
};

export default Reply;
