import React from 'react'
import Xlogo from '../assets/Xlogo.svg'
import homelogo from '../assets/Home.svg'
import explore from '../assets/Explore.svg'
import notifications from '../assets/Notifications.svg'
import messages from '../assets/Messages.svg'
import grok from '../assets/Grok.svg'
import bookmarks from '../assets/Bookmarks.svg'
import jobs from '../assets/Jobs.svg'
import communities from '../assets/Communities.svg'
import premium from '../assets/Premium.svg'
import business from '../assets/Business.svg'
import profile from '../assets/Profile.svg'
import more from '../assets/more.svg'
import ThreeDots from '../assets/ThreeDots.svg'
function Header() {
  return (
    <>
    <div className='header '>
      <div className='sideBar'> 
        <ul className='list flex flex-col'>
        <li className="listItem "><div ><img className='Logo' src={Xlogo} alt="" /></div></li>
          <li className="listItem "><div ><img className='Logo' src={homelogo} alt="" /></div>Home</li>
          <li className="listItem "><div ><img className='Logo' src={explore} alt="" /></div>Explore</li>
          <li className="listItem "><div ><img className='Logo' src={notifications} alt="" /></div>Notifications</li>
          <li className="listItem "><div ><img className='Logo' src={messages} alt="" /></div>Messages</li>
          <li className="listItem "><div ><img className='Logo' src={grok} alt="" /></div>Grok</li>
          <li className="listItem "><div ><img className='Logo' src={bookmarks} alt="" /></div>Bookmarks</li>
          <li className="listItem "><div ><img className='Logo' src={jobs} alt="" /></div>Jobs</li>
          <li className="listItem "><div ><img className='Logo' src={communities} alt="" /></div>Communities</li>
          <li className="listItem "><div ><img className='Logo' src={Xlogo} alt="" /></div>Premium</li>
          <li className="listItem "><div ><img className='Logo' src={business} alt="" /></div>Business</li>
          <li className="listItem "><div ><img className='Logo' src={profile} alt="" /></div>Profile</li>
          <li className="listItem "><div ><img className='Logo' src={more} alt="" /></div>More</li>
        </ul>
        <div className='Button-cont'>
        <button className='PostBtn'>Post</button>
        </div>
        <div className='ProfileBar'>
          <div>
          <span className='dpcont'><img className='dp' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXK50_He6FefRJX9bL996m2gGhkKsUzWbDnA&s" alt="" /></span>
          </div>
          <div>

          <div>
            <b>Shree Deepak</b>
          </div>  
          <span className='At'>ShreeDeepak.com</span>
        </div>
        <div>
          <span>
            <img className='ThreeDots' src={ThreeDots} alt="" />
          </span>
        </div>
          </div>
        
      </div>


    </div>
    
    </>
  )
}

export default Header

