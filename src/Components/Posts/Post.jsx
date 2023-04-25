import './post.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ThumbUpOffAltIcon from '@material-ui/icons/ThumbUpOffAlt';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState, useEffect, useRef } from 'react';
import { Users } from '../../Data';
function Post({ post }) {



    // const user = Users.filter(u => {

    // })

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const [color, setColor] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    const changeColor = () => {
        setColor(!color)
    }
    const fousAddOrRemove = () => {
        // if()
    }
    let userName = '';
    let userPhoto = '';

    Users.filter((u) => {
        if (u.id == post.userid) {
            userName = u.username;
            userPhoto = u.profilePicture;
        }

    });
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={userPhoto} alt="" className='postProfileImg' />
                        <span className='postUserName'>{userName} </span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className='postText'>{post?.desc}</span>
                    <img src={post.photo} alt="" className='postimg' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteIcon htmlColor='red' className='likeIcon' />
                        <ThumbUpIcon className='likeIcon' onClick={(e) => { likeHandler(); changeColor(); }} style={{ color: color ? "yellow" : "lightpink" }} />
                        <span className='postLikeCount'>{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postCommentText'> Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post