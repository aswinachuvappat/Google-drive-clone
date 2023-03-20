import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

import { IconButton, Avatar } from '@mui/material';
function Header() {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src='https://tse4.mm.bing.net/th?id=OIP.rc5dj7mHnmsqN73-3bm69QHaEK&pid=Api&P=0'></img>
                <span>Drive</span>
            </div>


            <div className='header_search'>
                <IconButton>
                    <SearchIcon />
                </IconButton>

                <input type="text" placeholder='search in drive'></input>

                <IconButton>
                    <FormatAlignCenterIcon />
                </IconButton>


            </div>


            <div className='header_icons'>

                
            <IconButton>  <HelpIcon /></IconButton>

                    
                  
                <IconButton><SettingsIcon /></IconButton>  
             
                  <IconButton> <AppsIcon /></IconButton> 
                    
                    <Avatar />

                

            </div>


        </div>
    )
}

export default Header
