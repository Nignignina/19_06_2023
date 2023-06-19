import "./TopBar.css";
import { Camera, Igtv, Logo, Share } from "../Icons";

const TopBar = () => {
  return (
    <div className="TopBar">
      <div className="LeftIcons">
        <Camera />
      </div>
      <div className="Topbar_Logo">
        <Logo />
      </div>
      <div className="RightIcons">
        <Igtv />
        <Share />
      </div>
    </div>
  );
};
export default TopBar;
