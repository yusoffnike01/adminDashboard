import './SideBar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Link } from 'react-router-dom';

const SideBar=()=>{

  return (<div className='sidebar'>
    <div className='top'>
      <Link to="/" style={{textDecoration: "none"}}>    
      <span className='logo'>Admin</span>
      </Link>
      </div>
   
   <hr/> <div className='center'>
      <ul>
        <p className='title'>MAIN</p>
        <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
        <p className='title'>LISTS</p>
        <Link to="/users" style={{textDecoration: "none"}}>    
        <li><PersonOutlineOutlinedIcon className='icon'/>
        <span>Users</span>
        </li>
        </Link>
        <Link to="/products" style={{textDecoration: "none"}}>    
        <li><StoreMallDirectoryOutlinedIcon className='icon'/><span>Products</span></li>
        </Link>
        <li><CreditCardIcon className='icon'/><span>Orders</span></li>
        <li><LocalShippingIcon className='icon'/><span>Delivery</span></li>
        <p className='title'>USEFUL</p>
        <li><LocalShippingIcon className='icon'/><span>Stats</span></li>
        <li><NotificationsNoneIcon className='icon'/><span>Notifications</span></li>
        <p className='title'>System Health</p>
        <li><LocalShippingIcon className='icon'/><span>System Health</span></li>
        <li><PsychologyIcon className='icon'/><span>Logs</span></li>
        <li><SettingsApplicationsIcon className='icon'/><span>Settings</span></li>
        <p className='title'>USER</p>
        <li><AccountCircleIcon className='icon'/><span>Profile</span></li>
        <li><ExitToAppIcon className='icon'/><span>Logout</span></li>
      </ul>
    </div>
    <div className='bottom'>
      <div className='colorOption'></div>
      <div className='colorOption'></div>
   
    </div>
  </div>)
}

export default SideBar;