import "./Topbar.css";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router';

function Topbar({}) {

    // const [value, setValue] = useState(0);
    // const navigate = useNavigate();

    // useEffect(() =>{
    //     if(value === 0) navigate("/")
    //     if(value === 1)navigate("/Profile");
    // },[value, navigate]) value={value} onClick={(event, newValue)=>{setValue(newValue)}}
    
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <span className="logo">GloryBook</span>
            </div>
            <div className="topBarCenter">
                <div className="searchBar"><SearchIcon className="searchIcon" /> <input placeholder="Search for friends, posts or video" className="searchInput" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">HomePage</span>
                    <span className="topBarLink">Timeline</span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIconItem">
                        <PersonIcon />
                        <span className="topBarIconBadge">1</span>

                    </div>
                    <div className="topBarIconItem">
                        <ChatIcon />
                        <span className="topBarIconBadge">1</span>
                    </div>
                    <div className="topBarIconItem">
                        <NotificationsIcon />
                        <span className="topBarIconBadge">1</span>
                    </div>
                </div>
                <img src="/Assets/Images/person2.jpg" className="topBarImg" alt="" /> 
            </div>
        </div>
    )
}

export default Topbar
