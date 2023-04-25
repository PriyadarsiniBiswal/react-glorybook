import "./profile.css";

import Topbar from '../../Components/TopBar/Topbar';
import LeftBar from '../../Components/LeftBar/LeftBar';
import Feedbar from '../../Components/FeedBar/Feedbar';
import Rightbar from '../../Components/RightBar/Rightbar';
function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <LeftBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/Assets/Images/n1.jpg" alt="" className="profileCoverImg" />
                            <img src="/Assets/Images/person2.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Cellina Akter</h4>
                            <span className="profileInfoDesc">Fly high dream rider</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feedbar />
                        <Rightbar profile="prodilebar"/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile