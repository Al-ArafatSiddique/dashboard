import { InventoryOutlined, KeyboardArrowUp, 
    LocalShippingOutlined, PaidOutlined, PersonOutline } from '@mui/icons-material'
import React from 'react'
import './widget.scss'

export default function Widget(props) {
    const amount = 100;
    const diff = 20;
    let data;
    if(props.type === 'users'){
        data={
            title: "USERS",
            isMoney: false,
            link: "See All Users",
            icon: <PersonOutline className='icon'
            style={{color:"black", backgroundColor:"#29b6f6"}} />
        }
    }else if(props.type==='products'){
        data={
            title: "PRODUCTS",
            isMoney: false,
            link: "See All Products",
            icon: <InventoryOutlined 
            className='icon'
            style={{color:"black", backgroundColor:"#ffbcaf"}} />
        }
    }else if(props.type==='orders'){
        data={
            title: "ORDERS",
            isMoney: false,
            link: "See All Orders",
            icon: <LocalShippingOutlined className='icon'
            style={{color:"black", backgroundColor:"#ffa040"}} />
        }
    }else if(props.type==='sales'){
        data={
            title: "SALES",
            isMoney: true,
            link: "See All Sales",
            icon: <PaidOutlined className='icon'
            style={{color:"black", backgroundColor:"#b085f5"}} />
        }
    }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">See All</span>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUp/>
            {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}
