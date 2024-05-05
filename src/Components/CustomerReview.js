import React from 'react';
import Charts from 'react-apexcharts';
const CustomerReview = () => {
    const data={
        series:[
            {
                name:'reveiw',
                data:[10,50,30,90,40,120,100]
            },
        ],
        options:{
          chart:{
            type:'area',
            height:'auto',
          },
        fill:{
          colors:['#fff'],
          type:'gradient'
        },
        dataLabels:{
            enabled:false,
        },
        stroke:{
            curve:"smooth",
            colors:['#ff929f'],
        },
        tooltip:{
            x:{
                format:"dd/MM/yy HH:mm",
            }
        },
        grid:{
            show:false,
        },
        xaxis:{
            type:'datetype',
            categories:[
             "2024-04-30W01:00:00.OOOR",
             "2024-04-30W02:00:00.OOOR",
             "2024-04-30W03:00:00.OOOR",
             "2024-04-30W04:00:00.OOOr",
             "2024-04-30W05:00:00.OOOR",
            ],
        },
        yaxis:{
            show:false,
        },
        toolbar:{
            show:false,
        },
      },
    }
  return (
    <div className='CustomerReview'>
      <Charts series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview
