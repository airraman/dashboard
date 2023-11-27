import React from 'react'
import "./widget.scss";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import RedeemIcon from '@mui/icons-material/Redeem';
import PercentIcon from '@mui/icons-material/Percent';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { blue } from '@mui/material/colors';


const Widget = ({type}) => {
  let data; 

  const amount = 100
  const diff = 20
  
  switch(type){
    case "user":
      data = {
        title: "USERS",
        isMoney:false,
        link: "See all users",
        icon:(
          <PermIdentityOutlinedIcon className='icon'/>
        )
      }
      break;
      case "order":
        data = {
          title: "ORDERS",
          isMoney:false,
          link: "View all orders",
          icon:(
            <RedeemIcon className='icon' style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "#ade6bb" }}/>
          )
        }
      break;
      case "earning":
        data = {
          title: "EARNINGS",
          isMoney:true,
          link: "View net earings",
          icon:(
            <AccountBoxIcon className='icon'style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "#bbade6",
            }}/>
          )
        }
        break;
        case "balance":
          data = {
            title:"BALANCE",
            isMoney:true,
            link: "See details",
            icon:(
            <PercentIcon className='icon'style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "#add8e6",
            }}/>
            )
            }
      break;
      default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && "$"}{amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
        <ArrowUpwardIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
