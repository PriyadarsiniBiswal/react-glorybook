import "./Share.css";
import PermMediaIcon from '@material-ui/icons/PermMedia';
import LabelIcon from '@material-ui/icons/Label';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import RoomIcon from '@material-ui/icons/Room';

function Share() {
    return (
        <div>
            <div className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img src="/Assets/Images/person1.jpg" alt="" className="shareprofileImg" />
                        <input placeholder="Write here" name="" id="" className="shareInput"/>
                    </div>
                    <hr  className="shareHr"/>
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <PermMediaIcon className="mediaIcon" htmlColor="tomato"/>
                                <span className="shareOptText">Photo or Video</span>
                            </div>
                            <div className="shareOption">
                                <LabelIcon className="mediaIcon" htmlColor="blue"/>
                                <span className="shareOptText">Tag</span>
                            </div>
                            <div className="shareOption">
                                <RoomIcon className="mediaIcon" htmlColor="green"/>
                                <span className="shareOptText">Location</span>
                            </div>
                            <div className="shareOption">
                                <EmojiEmotionsIcon className="mediaIcon" htmlColor="goldenrod"/>
                                <span className="shareOptText">Feelings</span>
                            </div>
                        </div>
                        <button className="shareBtn">Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share