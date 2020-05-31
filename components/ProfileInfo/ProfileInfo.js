import React from "react";
import profile from "../../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const ProfileInfo = () => {
  return (
    <>
      <div className="profile-container mt-lg-5 mb-sm-3 mx-lg-5">
        <div className="profile-img-wrapper">
          <div className="profile-img">
            <img src={profile} alt="profile" />
          </div>
          <div className="profile-name">
            <div className="profile-name-primary">Hashim Aslam </div>
            <div className="profile-name-secondary"> 23 years, India</div>
          </div>
        </div>
        <div className="profile-icon">
          <FontAwesomeIcon icon={faBars} size="1x" color="#5c72f2" />
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
