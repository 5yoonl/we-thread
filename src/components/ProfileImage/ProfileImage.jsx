import React from "react";
import "./ProfileImage.scss";
const ProfileImage = ({ src, type = "large" }) => {
  return (
    <div className={`profileImage ${type}`}>
      <img src={src} alt="userProfileImage" />
    </div>
  );
};

export default ProfileImage;
