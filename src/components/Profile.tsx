import StyledProfile from "../css/StyledProfile";

const Profile = () => {
  return (
    <StyledProfile>
      <div className="image"></div>
      <div className="info">
        <div className="name">Mike Shaw</div>
        <div className="title">Web Dev</div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
