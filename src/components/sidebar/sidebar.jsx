import React from 'react'
import './sidebar.scss'


import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import RedeemIcon from '@mui/icons-material/Redeem';
import MailIcon from '@mui/icons-material/Mail';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PercentIcon from '@mui/icons-material/Percent';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import RecommendIcon from '@mui/icons-material/Recommend';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';


const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">admin</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PermIdentityOutlinedIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <RedeemIcon className='icon' />
                    <span>Products</span>
                </li>
                <li>
                    <MailIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <CheckBoxIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <PercentIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <CircleNotificationsIcon className='icon' />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <RecommendIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <EventNoteIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon' />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon' />
                    <span>Log Out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"></div>
            <div className="colorOptions"></div>
        </div>
    </div>
  )
}

export default sidebar