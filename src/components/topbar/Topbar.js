import React from 'react';
import './topbar.css';
import {Notifications,Settings,AccountCircle} from '@material-ui/icons';


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>
                        Bodima - Admin Dashboard
                    </span>
                </div>
                <div className='topRight'>
                    <div className='topbariconsContainer'>
                        <Notifications className='topbaricon'/>
                        <div className='notiBadge'>
                            <div>3</div>
                        </div>
                    </div>
                    <div className='topbariconsContainer'>
                        <Settings className='topbaricon'/>
                    </div>
                    <div className='topbariconsContainer'>
                        <AccountCircle className='topbaricon'/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
