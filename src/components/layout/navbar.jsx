import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa';


const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <FaBars aria-hidden="true" className='bars'/>
            </div>
            <div className="nav-search">
                <FaSearch  className='search-icon'/>
                <input type="text"  placeholder='Search'/>
            </div>
            
            <div className="navbar__right">
                <img src="images/icons/notification.svg" alt="" />
                <div className="user-info">
                    <p className='user-name'>Jesutofunmi Adewole</p>
                    <h4 className='user-role'>User</h4>
                </div>
                <a href="#!">
                    <img width="30" src='images/dashboard/avatar.png' alt="avatar" />
                </a>
            </div>
    </nav>
    )
}

export default Navbar
