import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/Sidebar";
import './new.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";

const New = ({inputs, title}) => {
  const [file, setFile]= useState("")

  return (<div className="new">
    <SideBar />
    <div className="newContainer">
      <NavBar />
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={file ? URL.createObjectURL(file):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="" />
        </div>
        <div className="right">
          <form>
          <div className="formInput">
              <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon"/></label>
              <input type="file"  id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
            </div>
        {
          inputs.map((input)=>(
            <div className="formInput" key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder}/>
            </div>
          ))
        }
            <button>Send</button>
          </form>
        </div>
      </div>

    </div>
  </div>)
}

export default New;