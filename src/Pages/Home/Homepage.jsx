import React from 'react';

import './Home.css';
import Topbar from '../../Components/TopBar/Topbar';
import LeftBar from '../../Components/LeftBar/LeftBar';
import Feedbar from '../../Components/FeedBar/Feedbar';
import Rightbar from '../../Components/RightBar/Rightbar';

function Homepage() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <LeftBar />
        <Feedbar />
        <Rightbar />
      </div>

    </>
  )
}
export default Homepage