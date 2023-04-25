import Post from '../Posts/Post';
import Share from '../Share/Share';
import './Feedbar.css';
import { Posts } from '../../Data';

function Feedbar() {
  return (
    <div className='feedBar'>
      <div className="feedbarWrapper">
        <Share/>
        {Posts.map(p => (
          <Post post={p} key={p.id}/>
        ))}
      </div>
    </div>
  )
}

export default Feedbar