import React from 'react'
import LineChart_frame from '../../components/chart/LineChart_frame'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import UserTable from '../../components/tables/UserTable';

export default function Home() {
    const userdata = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];


      const monthlysalesdata = [
        {
          month: 'jan',
          uv: 7000,
          pv: 1100,
        },
        {
          month: 'feb',
          uv: 8000,
          pv: 6100,
        },
        {
          month: 'mar',
          uv: 5000,
          pv: 7100,
        },
        {
          month: 'apr',
          uv: 7000,
          pv: 1100,
        },
        {
          month: 'jun',
          uv: 8000,
          pv: 6100,
        },
        {
          month: 'jul',
          uv: 8000,
          pv: 6100,
        },
        {
          month: 'aug',
          uv: 4000,
          pv: 9000,
        },
        {
          month: 'sep',
          uv: 7000,
          pv: 5100,
        },
        {
          month: 'oct',
          uv: 7000,
          pv: 1100,
        },
        {
          month: 'nov',
          uv: 3000,
          pv: 1100,
        },
        {
          month: 'dec',
          uv: 8000,
          pv: 6100,
        },
       
        
      ];

    return (
        <div className='home'>
            <Featuredinfo/>

            <LineChart_frame
                        title='User Analytics'
                        data ={userdata}
                        datakey='name'
                        line1={true}
                        line2={true}
                        line1datakey={'uv'}
                        line2datakey={'pv'}
                        YAxis={true}
                        Legend={true}
                        />

            
            <UserTable/>


            <LineChart_frame
                        title='Monthly sales'
                        data ={monthlysalesdata}
                        datakey='month'
                        line1={true}
                        line2={true}
                        line1datakey={'uv'}
                        line2datakey={'pv'}
                        YAxis={false}
                        Legend={false}
                        />
        </div>
    )
}
