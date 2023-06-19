import "./story.css";

const Story = ({ user }) => {
  console.log(user.user);
  return (
    <div className="Story">
      <div className="Story_img">
        <img src={user.picture.thumbnail} alt="" />
      </div>
      <p className="nickname_story">{user.login.username}</p>
    </div>
  );
};

export default Story;
