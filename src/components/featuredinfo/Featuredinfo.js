import React from 'react'
import './featuredinfo.css';
import {ArrowDownward,ArrowUpward} from '@material-ui/icons'

export default function Featuredinfo() {
    return (
        <div className='feat-outer'>
            <div className='featured'>
            <div className="feat_topic">
                Revenue
            </div>
            <div className='feat_values_div'>
                <div className="feat_val">
                    Rs. 10340.00
                </div> 
                <div className="feat_val_plus_minus">
                    1203.00 <ArrowDownward className='icon_feat down'/>
                </div> 
            </div>
            <div className="feat_description">
                Compared to last month
            </div>
        </div>

        <div className='featured'>
            <div className="feat_topic">
           Cost
            </div>
            <div className='feat_values_div'>
                <div className="feat_val">
                    Rs. 7340.00
                </div> 
                <div className="feat_val_plus_minus">
                    4303.00 <ArrowDownward className='icon_feat down'/>
                </div> 
            </div>
            <div className="feat_description">
                Compared to last month
            </div>
        </div>

        <div className='featured'>
            <div className="feat_topic">
                Net Profit
            </div>
            <div className='feat_values_div'>
                <div className="feat_val">
                    Rs. 10340.00
                </div> 
                <div className="feat_val_plus_minus">
                    -1203.00 <ArrowUpward className='icon_feat up'/>
                </div> 
            </div>
            <div className="feat_description">
                Compared to last month
            </div>
        </div>

        </div>
        
    )
}
