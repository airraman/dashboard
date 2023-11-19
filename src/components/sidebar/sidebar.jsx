import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';


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
                    <DashboardIcon/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PermIdentityOutlinedIcon/>
                    <span>Users</span>
                </li>
                <li>
                    <span>Products</span>
                </li>
                <li>
                    <span>Orders</span>
                </li>
                <li>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <span>Stats</span>
                </li>
                <li>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <span>System Health</span>
                </li>
                <li>
                    <span>Logs</span>
                </li>
                <li>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <span>Profile</span>
                </li>
                <li>
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