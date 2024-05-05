import React,{useState} from 'react';
import './Dashboard.css';
import { SidebarData } from './Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
const Sidebar = () => {
    const [selected,setSelected]=useState(0);
    return (
        <div className='Sidebar'>
            <div className='logo'>
                <img src='/Images/logo.png' alt=''></img>
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            <div className='menu'>
                {SidebarData.map((item, i) => {
                    return (
                        <div className={selected===i ? 'menuItem active' : 'menuItem'} key={i} onClick={()=>setSelected(i)}>
                            <div>
                                <item.icon />
                            </div>
                            <span>{item.heading}</span>
                        </div>
                    )
                })}
                <div className='menuItem'>
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
