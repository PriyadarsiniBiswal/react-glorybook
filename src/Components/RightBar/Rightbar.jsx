import Online from '../Online/Online';
import './Rightbar.css';
import { Users } from '../../Data';
import { useState } from "react";

function Rightbar({profile}) {


const HomeRightBar = () => {

  return(
    <>
    <div className="birthdayContainer">
          <img src="/Assets/Images/emoji.jpg" alt="" className='birthdayImg' />
          <span className='birthdayText'><b>Barun</b>  and <b>3 others</b>3 others have a birthday today.</span>
        </div>
        <img src="/Assets/Images/add.jpg" alt="" className='rightbarAdd' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
        
          {Users.map((u) => (
             <Online key={u.id} user={u}/>
          ))}
         
        </ul>
    </>
  )
}

 const ProfileRightBar = () => {
  return(
    <>
     <h4 className='rightbarTitle'>User information</h4>
     <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className='rightbarInfoKey'>City:</span>
        <span className='rightbarInfoValue'>London</span>
      </div>
      <div className="rightbarInfoItem">
        <span className='rightbarInfoKey'>From:</span>
        <span className='rightbarInfoValue'>New York</span>
      </div>
      <div className="rightbarInfoItem">
        <span className='rightbarInfoKey'>Relationship:</span>
        <span className='rightbarInfoValue'>Single</span>
      </div>
     </div>
     <h4 className='rightbarTitle'>User Friends</h4>
     <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="/Assets/Images/person1.jpg" alt="" className='rightbarFollowingImg'/>
        <span className='rightbarFollowerName'>Neha Kapoor</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/Assets/Images/person3.jpg" alt="" className='rightbarFollowingImg'/>
        <span className='rightbarFollowerName'>Neha Kapoor</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/Assets/Images/person4.jpg" alt="" className='rightbarFollowingImg'/>
        <span className='rightbarFollowerName'>Neha Kapoor</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/Assets/Images/person5.jpg" alt="" className='rightbarFollowingImg'/>
        <span className='rightbarFollowerName'>Neha Kapoor</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/Assets/Images/n1.jpg" alt="" className='rightbarFollowingImg'/>
        <span className='rightbarFollowerName'>Neha Kapoor</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/Assets/Images/dog1.jpg" alt="" className='rightbarFollowingImg'/>
        <span className='rightbarFollowerName'>Neha Kapoor</span>
      </div>
     </div>
    </>
   

  )
}
  return (
    <div className='rightBar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}
export default Rightbar