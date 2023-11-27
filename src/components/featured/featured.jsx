import React from 'react'
import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value = {70} text = {"70%"} strokeWidth={3} styles = {buildStyles({pathColor: '#ade6bb'})}/>
            </div>
            <p className="title">Quarterly Sales</p>
            <p className="amount">$420</p>
            <p className="description">DESCRIPTION</p>
            <div className="summaryHolder">
            <div className="summary">
              <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult">
                  <KeyboardArrowDownIcon fontSize='small'/>
                  <div className="resultAmount">$12.4K</div>
                </div>
              </div>
            </div>
            <div className="summary">
              <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive" >
                  <KeyboardArrowDownIcon fontSize='small'/>
                  <div className="resultAmount">$12.4K</div>
                </div>
              </div>
            </div>
            <div className="summary">
              <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult negative" >
                  <KeyboardArrowDownIcon fontSize='small'/>
                  <div className="resultAmount">$12.4K</div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Featured