import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/saidbar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
const Profile = () => {
    return (
        <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="prfileRightTop">
                    <div className="profileCover">
                        <img src="./assets/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="./assets/person/3.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Alex Durden</h4>
                        <span className="profileInfoDesc">Hello my friends!</span>
                    </div>
                </div>
                <div className="profileRightBotton">
                    <Feed />
                    <Rightbar profile />
                </div>
            </div>
        </div>
      </>
    );
}

export default Profile;
