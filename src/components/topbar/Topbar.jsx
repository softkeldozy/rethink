import React from 'react';
import './Topbar.css';
import profilePic from './2.jpg'
import search from './assets/icons/search.svg';
import filter from './assets/icons/filter.svg';
import close from './assets/icons/remove.svg';
import coin from './assets/icons/coin.svg'
import calender from './assets/icons/calender.svg'
import notification from './assets/icons/notification.svg'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topLeft">

        <div className='search'>
          <input type="text" placeholder="Search for templates, projects, etc" className='serachInput' />
          <img src={search} alt='search' className='searchBtn' />
          <img src={filter} alt='search' className='filterBtn' />
          <img src={close} alt='search' className='closeBtn' />
          <div className="btnGroup">
            <button className='createContent'>
              Create Content
            </button>
            <button className='rectangleBtn'>
              <img src={coin} alt='search' className='coineBtn' />
              20
            </button>
          </div>

        </div>

      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
          <img src={calender} alt='date' className='calBtn' />
        </div>
        <div className="topbarIconContainer">
          <img src={notification} alt='date' className='calBtn' />
        </div>
        <img src={profilePic} alt='' className='topAvatar' />
      </div>
    </div>
  )
}

export default Topbar; 