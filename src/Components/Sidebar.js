import React,{useState} from 'react';
import './Dashboard.css';
import { SidebarData } from './Data';
import {motion} from 'framer-motion';
import {UilSignOutAlt,UilBars} from '@iconscout/react-unicons';
const Sidebar = () => {
    const [selected,setSelected]=useState(0);
    const [expanded,setExpanded]=useState(true);
    const sideVarients={
        true:{
            left:0
        },
        false:{
            left:'-60%'
        }

}
    return (
        <>
         <div className='bars' style={expanded ? {left:'60%'}:{left:'5%'}} onClick={()=>setExpanded(!expanded)}>
                <UilBars />
            </div>
         <motion.div className='Sidebar' 
          varients={sideVarients} 
          animate={window.innerWidth<=768 ? `${expanded}` : '' }
         >
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
        </motion.div>
        </>
    )
}

export default Sidebar
