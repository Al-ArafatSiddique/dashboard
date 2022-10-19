import React from 'react'
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../widget/Widget';
export default function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>

        <div className="widgets">
          <Widget type='users'/>
          <Widget type='products'/>
          <Widget type='orders'/>
          <Widget type='sales'/>
        </div>

      </div>
    </div>
  )
}
