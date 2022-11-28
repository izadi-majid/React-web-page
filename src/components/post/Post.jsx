import "./post.css";
import {MoreVert} from "@mui/icons-material"
const Post = () => {

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="./assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername">Lily SHA</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its My First Post</span>
                    <img src="./assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="./assets/like.png" alt="" />
                        <img className="likeIcon" src="./assets/heart.png" alt="" />
                        <span className="postCounterliked"><span>35</span> pepole like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"><span>10</span> comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
