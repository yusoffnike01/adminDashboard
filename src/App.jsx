import { useContext, useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { productIpunts, userInputs } from './formSource';
import "./style/dark.scss";
import { DarkModeContext } from './components/context/darkModeContext';

function App() {

const {darkMode}= useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'App dark':'App'}>
     <BrowserRouter>
     <Routes>
       <Route path='/'>
         <Route index element={<Home/>}/>
         <Route path='login' element={<Login/>}/>
         <Route path='users'>
            <Route index element={<List/>}/>
            <Route path=":userID" element={<Single/>}/>
            <Route path="new" element={<New inputs={userInputs} title="Add New Users"/>}/>
         </Route>
         <Route path='products'>
           <Route index element={<List/>}/>
           <Route path=":productId" element={<Single/>}/>
           <Route path="new" element={<New inputs={productIpunts} title="Add New Product"/>}/> 
         </Route>
       </Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
