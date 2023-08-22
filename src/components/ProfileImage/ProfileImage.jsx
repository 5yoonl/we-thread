import React from "react";
import "./ProfileImage.scss";

const ProfileImage = ({ src, type = "large" }) => {
  return (
    <div className={`profileImage ${type}`}>
      <img src={src} alt="유저 프로필" />
    </div>
  );
};

export default ProfileImage;
