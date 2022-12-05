import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import BasicModal from './modal';
import SideBar from './sideBar';
import PersistentDrawerLeft from './menu';


function Navbar() {
    return (
        <>
        <div className='nav_bar'>
            <div className='navbar_div'>
                <div className='navbar_main_div'>
                    <ul>
                        <li><a><Link style={{color:'black'}} to="/woman">Woman</Link></a></li>
                        <li><a><Link style={{color:'black'}} to="/man">Men</Link></a></li>
                        <li><a><Link style={{color:'black'}} to="/kids">Kids</Link></a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a><BasicModal/></a></li>
                        <li><a><SideBar/></a></li>
                    {/* <li><a><AccountCircleIcon style={{fontSize:'28px',marginRight:'10px',color:'black'}}/></a></li> */}
                    </ul>
                </div>
            </div>
        </div>
        <PersistentDrawerLeft/>
        </>
    )
}

export default Navbar
