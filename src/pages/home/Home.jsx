import React from 'react'
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
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

        <div className="charts">
          <Featured/>
          <Chart/>
        </div>

      </div>
    </div>
  )
}
