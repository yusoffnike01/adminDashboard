import Datatable from "../../components/datatable/Datatable";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/Sidebar";
import './list.scss';

const List =()=>{
  return (<div className="list">
<SideBar/>
<div className="listContainer">
  <NavBar/>
  <Datatable/>
</div>
  </div>)
}

export default List;