import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DehazeIcon from '@mui/icons-material/Dehaze';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import './data.css'
function Data() {
  return (

    
    <div className='data'>
      <div className='data_header'>
        <div className='data_headerLeft'>
          <p>My Drive</p>
          <ArrowDropDownIcon />
        </div>
        <div className='data_headerRight'>
          <IconButton> <DehazeIcon /></IconButton>
          <IconButton> <InfoOutlinedIcon /></IconButton>
        </div>
        </div>

     

      <div className='data_content'>

        <div className='data_grid'>

          <div className='data_file'>
            <InsertDriveFileIcon/>
            <p>File Name</p>

          </div>

          <div className='data_file'>
            <InsertDriveFileIcon/>
            <p>File Name</p>

          </div>

          <div className='data_file'>
            <InsertDriveFileIcon/>
            <p>File Name</p>

          </div>

        </div>


        <div className='data_list'>
          <div className='detailsRow'>
            <p><b>Name<ArrowDownwardIcon/></b></p>
            <p><b>Owner</b></p>
            <p><b>Last Modified</b></p>
            <p><b>File Size</b></p>
            </div>
        </div>

        <div className='data_list'>
          <div className='detailsRow'>
            <p>Name  <InsertDriveFileIcon/></p>
            <p>Mega</p>
            <p>Yesterday</p>
            <p>1 GB</p>
            </div>
        </div>

        <div className='data_list'>
          <div className='detailsRow'>
            <p>Name  <InsertDriveFileIcon/></p>
            <p>Anu</p>
            <p>Yesterday</p>
            <p>3 GB</p>
            </div>
        </div>
        <div className='data_list'>
          <div className='detailsRow'>
            <p>Name  <InsertDriveFileIcon/></p>
            <p>surath</p>
            <p>Yesterday</p>
            <p>1.4 GB</p>
            </div>
        </div>



        

      </div>
    </div>
  )
}

export default Data
