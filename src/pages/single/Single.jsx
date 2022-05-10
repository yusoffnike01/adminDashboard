import Chart from "../../components/chart/Chart";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/Sidebar";
import List from "../../components/table/Table";
import './single.scss'

const  Single=()=>{
  return (<div className="single">
    <SideBar/>
    <div className="singleContainer">
      <NavBar/>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?fit=crop&format=jpg&crop=4560,2565,x790,y784,safe" alt="" className="itemImg"/>
         
         <div className="details">
           <h1 className="itemTitle">Jane Doe</h1>
           <div className="detailItem">
             <span className="itemKey">Email:</span>
             <span className="itemValue">janaDoe@gmail.com</span>
           </div>
           <div className="detailItem">
             <span className="itemKey">Address:</span>
             <span className="itemValue">5472-O Jalan Dusun Muda</span>
           </div>
           <div className="detailItem">
             <span className="itemKey">Country:</span>
             <span className="itemValue">Malaysia</span>
           </div>
         </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3/1} title="User spending (Last 6 Month)"/>
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transaction</h1>
        <List/>
      </div>
    </div>
  </div>)

}

export default Single;