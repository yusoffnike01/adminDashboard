import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/Sidebar";
import './new.scss';

const New=()=>{
  return (<div className="new">
    <SideBar/>
    <div className="newContainer">
      <NavBar/>
      test
    </div>
  </div>)
}

export default New;