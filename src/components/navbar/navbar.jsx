import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input className = 'searchinput'type='text' placeholder='search...'></input>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
                <div className="item">
                    English
                </div>
                <div className="item">
                    English
                </div>
                <div className="item">
                    English
                </div>
                <div className="item">
                    English
                </div>
                <div className="item">
                    <img
                    src='https://miamiadschool.com/wp-content/uploads/2021/07/Raman-Mama-MAD-Teacher.jpg.webp'
                    className='avatar'
                    />
                </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar