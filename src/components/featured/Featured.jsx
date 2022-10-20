import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss'

export default function Featured() {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Rev</h1>
        <MoreVert fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3}/>
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">See all the payment that are completed</p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize='small'/>
              <div className="resultAmount">$12k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize='small'/>
              <div className="resultAmount">$12k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlined fontSize='small'/>
              <div className="resultAmount">$12k</div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
