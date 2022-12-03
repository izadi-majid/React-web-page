// import { MoneyOffRounded } from "@mui/icons-material";
// import { Users } from "../../dummyData";
import "./friend.css";

const Friend = ({user}) => {
    console.log(user);
    return (
        <div className="friend">
           <div className="friendbox">
            <img src={user.profilePicture} alt="" className="friendImg" />
            <span className="friendUsername">{user.username}</span>
           </div>
        </div>
    );
}

export default Friend;
