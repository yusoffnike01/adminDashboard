import React from 'react'
import SideBar from '../../components/SideBar/Sidebar';
import NavBar from '../../components/NavBar/NavBar';
import './home.scss'

const Home =()=>{
return (<div className='home'>
<SideBar/>
<div className='homeContainer'>
  <div className='homeContainer'>
    <NavBar/>
  </div>
</div>
</div>)
}

export default Home;