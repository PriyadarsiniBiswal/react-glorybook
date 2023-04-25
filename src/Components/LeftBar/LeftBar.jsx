import './Leftbar.css';
// import RssFeedIcon from '@mui/icons-material/RssFeed';

import RssFeedIcon from '@material-ui/icons/RssFeed';
import GroupIcon from '@material-ui/icons/Group';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import EventIcon from '@material-ui/icons/Event';
import SchoolIcon from '@material-ui/icons/School';
import ChatIcon from '@material-ui/icons/Chat';
import FriendList from '../FriendLists/FriendList';

import {Users} from '../../Data';

function LeftBar() {
    return (
        <div className='leftBar'>
            <div className="leftBarWrapper">
                <ul className="leftBarList">
                    <li className='leftBarListItem'>
                        <RssFeedIcon className='leftBarIcon' />
                        <span className='leftBarListItemText'>Feed</span>
                    </li>
                    <li className='leftBarListItem'>
                        <ChatIcon className='leftBarIcon' />
                        <span className='leftBarListItemText'>Chats</span>
                    </li>
                    <li className='leftBarListItem'>
                        <PlayCircleOutlineIcon className='leftBarIcon' />
                        <span className='leftBarListItemText'>Videos</span>
                    </li>
                    <li className='leftBarListItem'>
                        <GroupIcon className='leftBarIcon' />
                        <span className='leftBarListItemText'>Group</span>
                    </li>
                    <li className='leftBarListItem'>
                        <BookmarkIcon className='leftBarIcon' />
                        <span className='leftBarListItemText'>Bookmark</span>
                    </li>
                    <li className='leftBarListItem'>
                        <HelpOutlineIcon className='leftBarIcon' />
                        <span className='leftBarListItemText'>Questions</span>
                    </li>
                    <li className='leftBarListItem'>
                        <WorkOutlineIcon className='leftBarIcon' />
                        <span className='leftBarListItemText'>Jobs</span>
                    </li>
                    <li className='leftBarListItem'>
                        <EventIcon className='leftBarIcon' />
                        <span className='leftBarListItemText'>Events</span>
                    </li>
                    <li className='leftBarListItem'>
                        <SchoolIcon className='leftBarIcon' />
                        <span className='leftBarListItemText'>Courses</span>
                    </li>
                </ul>
                <button className='leftBarBtn'>Show More</button>
                <hr className='leftBarHr'/>
                <ul className='leftBarFriendList'>
                    {Users.map( u => (
                        <FriendList user={u} key={u.id}/>
                    ))}
                   
                </ul>
            </div>
        </div>
    )
}

export default LeftBar
