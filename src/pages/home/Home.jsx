import React from 'react'
import SideBar from '../../components/SideBar/Sidebar';
import NavBar from '../../components/NavBar/NavBar';
import './home.scss'
import Widget from '../../components/widget/widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';


const Home =()=>{
return (<div className='home'>
<SideBar/>
<div className='homeContainer'>
  <div className='homeContainer'>
    <NavBar/>
    <div className='widgets'>
      <Widget type="user"/>
      <Widget type="order"/>
      <Widget type="earning"/>
      <Widget type="balance"/>
    </div>
    <div className='charts'>
      <Featured/>
      <Chart/>
    </div>
    <div className='listContainer'>
      <div className='listTitle'>Latest Transactions</div>
      <Table/>
    </div>
  </div>
</div>
</div>)
}

export default Home;