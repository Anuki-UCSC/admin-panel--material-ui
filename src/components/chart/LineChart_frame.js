import React, { PureComponent } from 'react';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer } from 'recharts';


  
export default function LineChart_frame({title,data,datakey,line1=true,line2,line1datakey,line2datakey,YAxis=true,Legend}) {
    return (
          <div>
            <h2>{title}</h2>
            <ResponsiveContainer width="100%" aspect={4/1}>
               <LineChart data={data}>
                    <XAxis dataKey={datakey}  stroke='#555063'/>
                    <YAxis />
                    {line1 && <Line type="monotone" dataKey={line1datakey} stroke="#8884d8" activeDot={{ r: 8 }} />}
                    {line2 && <Line type="monotone" dataKey={line2datakey} stroke="#82ca9d" />}
                    {YAxis && <Tooltip />}
                    {Legend && <Legend />}
                    <CartesianGrid stroke='#e1e3e1'/>
                </LineChart> 
            </ResponsiveContainer>
          </div>
    )
}
