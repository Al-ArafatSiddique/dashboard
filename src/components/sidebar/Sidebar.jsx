import React from 'react';
import './sidebar.scss';
import { AddShoppingCartSharp, Dashboard, Group, Inventory, LocalShipping, Logout, NotificationAdd, Person, Settings} from '@mui/icons-material';

export default function sidebar() {
  return (
    <div className='sidebar'>


        <div className='top'>
          <span className="logo">Dashboard</span>
        </div>
        <hr />


        <div className='center'>
          <ul>
            <p className="title">Main</p>
            <li>
              <Dashboard className='icon'/>
              <span>Dashboard</span>
            </li>
            <li>
              <Group className='icon'/>
              <span>Users</span>
            </li>
            <li>
              <Inventory className='icon'/>
              <span>Products</span>
            </li>
            <li>
              <AddShoppingCartSharp className='icon'/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShipping className='icon'/>
              <span>Deliver</span>
            </li>
            <li>
              <NotificationAdd className='icon'/>
              <span>Notifications</span>
            </li>
            <p className="title">Useful Links</p>
            <li>
              <Settings className='icon'/>
              <span>Settings</span>
            </li>
            <li>
              <Person className='icon'/>
              <span>Profile</span>
            </li>
            <li>
              <Logout className='icon'/>
              <span>Logout</span>
            </li>
          </ul>
        </div>


        <div className='bottom'>
          <div className="colorOptions"></div>
          <div className="colorOptions"></div>
        </div>
    </div>
  )
}
