import "./post.css";
import {MoreVert} from "@mui/icons-material";
import {Users} from "../../dummyData";
import { useState } from "react";
const Post = ({post}) => {
    const [like, setLike] = useState(post.like);
    const [islike, setIsLiked] = useState(false);

    const likeHandler = ()=>{
        setLike(islike ? like-1 : like+1);
        setIsLiked(!islike);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">
                            {Users.filter((u)=>u.id===post.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="./assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="./assets/heart.png" onClick={likeHandler}  alt="" />
                        <span className="postCounterliked"><span>{like}</span> pepole like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"><span>{post.comment}</span> comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
