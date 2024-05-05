import React,{useState} from 'react'
// import {AnimateSharedLayout} from 'framer-motion';
import { LayoutGroup } from 'framer-motion';
import ExpandedCard from './ExpandedCard';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Card = (props) => {
    const [expanded,setExpanded]=useState(false);
  return (
   <LayoutGroup>
    { expanded ? (
       <ExpandedCard />
       )
       :
       <CompactCard  param={props} />

    }
   </LayoutGroup>
  )
}
function CompactCard({ param }) {
  // Ensure png is a valid React component, or handle it appropriately
  const Png = param.png; // If `param.png` should be a component, make sure it's capitalized to be used as a component

  // Destructure the `color` object
  const { background, boxShadow } = param.color;

  return (
    <div className='CompactCard' style={{ background, boxShadow }}>
      <div className='radialBar'>
        <CircularProgressbar
          value={param.barValue}
          text={`Rs ${param.barValue}%`} 
        />
        <span>{param.title}</span>
      </div>
      <div className='detail'>
        {Png && <Png />} 
        <span>Rs {param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}
export default Card
