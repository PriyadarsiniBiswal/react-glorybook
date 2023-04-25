import './friendlist.css';

function FriendList({user}) {
    // console.log(user, "user");
  return (
    <li className='leftBarFriend'>
    <img src={user.profilePicture} alt="" className='leftBarFriendImg'/>
    <span className='leftBarFriendName'>{user.username}</span>
</li>
  )
}

export default FriendList