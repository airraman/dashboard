import React from 'react'
import "./widget.scss";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const Widget = () => {
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>USERS</span>
        <span className='counter'>1000000</span>
        <span className='link'>See all users</span>
      </div>
      <div className='right'>
        <div className='percentage'>
        <ArrowUpwardIcon />
          20%

        </div>
        <PermIdentityOutlinedIcon className='icon'/>
      </div>
    </div>
  )
}

export default Widget
