import React,{useState} from 'react'
import { LayoutGroup } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';
const Card = (props) => {
    const [expanded,setExpanded]=useState(false);
  return (
   <LayoutGroup>
    { expanded ? (
       <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
       )
       :
       <CompactCard  param={props} setExpanded={()=>setExpanded(true)}/>

    }
   </LayoutGroup>
  )
}
function CompactCard({ param,setExpanded }) {
  const Png = param.png;
  return (
    <motion.div className='CompactCard' layoutId='expandableCard' style={{ background:param.color.backGround, boxShadow:param.color.boxShadow }} onClick={setExpanded}>
      <div className='radialBar'>
        <CircularProgressbar
          value={param.barValue}
          text={`Rs ${param.barValue}%`} 
        />
        <span>{param.title}</span>
      </div>
      <div className='detail'>
         <Png />
        <span>Rs {param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}
function ExpandedCard({param,setExpanded}){
  const data={
    options:{
      chart:{
        type:'area',
        height:'auto'
      },
      dropShadow:{
        enabled:false,
        enabledOnSeries:undefined,
        top:0,
        left:0,
        blur:3,
        color:'#000',
        opacity:0.35,
      },
      fill:{
        type:'gradient',
        colors:['#fff'],
      },
      dataLabels:{
        enabled:false,
      },
      stroke:{
        curve:'smooth',
        color:['white'],
      },
      tooltip:{
        x:{
          format:'dd/MM/yy HH:mm'
        },
        grid:{
          show:true,
        },
        xaxis:{
          type:'datetime',
          categories:[
            '2024-4-30 :00 00 00',
            '2024-4-30 :00 00 00',
            '2024-4-30 :00 00 00',
            '2024-4-30 :00 00 00',
            '2024-4-30 :00 00 00',
            '2024-4-30 :00 00 00',
            '2024-4-30 :00 00 00',
          ]
        },

      }

    }
  }
  return(
   <div className='ExpandedCard' style={{background:param.color.backGround,boxShadow:param.color.boxShadow}} layoutId='expandableCard'>
     <div  style={{alignSelf:'flex-end',cursor:'pointer',color:'white'}}>
      <UilTimes onClick={setExpanded}
      />
     </div>
     <span>
      {param.title}
     </span>
     <div className='chartContainer'>
     <Chart 
        series={param.series}
        type='area'
        option={data.options}
     >

     </Chart>
     </div>
     <span>Last 24 hours</span>
   </div>
  )
}
export default Card
