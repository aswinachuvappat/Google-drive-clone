import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

import AddToHomeScreenOutlinedIcon from '@mui/icons-material/AddToHomeScreenOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

import './sidebar.css'
import { Modal } from '@mui/material';
// import { db, storage } from './firebase';
// import firebase from 'firebase/compat/app';







function Sidebar() {

  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);


  const handleClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }

  }

  const handleUpload = (event) => {
    event.preventDefault();
    setUploading(true);

    // storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
    //   storage.ref("files").child(file.name).getDownloadURL().then(url=>{
    //     db.collection("myfiles").add({
    //       timestamp : firebase.firestore.FieldValue.serverTimestamp(),
    //       filename: file.name,
    //       fileURL:url,
    //       size:snapshot._delegate.bytesTransferred

    //     })

    //     setUploading(false);
    //     setFile(null);
    //     setOpen(false);
    //   })
    // })
    
  }

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className='modal_pop'>
          <form>
            <div className='modal_heading'>
              <h3>Select file you want to upload</h3>
            </div>
            <div className='modal_body'>
              {
                uploading ? (<p className='uploading'>Uploading . . .</p>) : (
                  <>
                    <input type="file" onChange={handleChange} />
                    <input type="submit" className='post_submit' onClick={handleUpload} />
                  </>
                )

              }

            </div>

          </form>

        </div>
      </Modal>


      <div className='sidebar'>

        <div className='sidebar_btn'>
          <button onClick={handleOpen}>
            <AddIcon />
            <span>new</span>
          </button>
        </div>


        <div className='sidebar_options'>

          <div className='sidebar_option sidebar_option-active'>
            <AddToHomeScreenOutlinedIcon />
            <span>My drive</span>
          </div>

          <div className='sidebar_option'>
            <DevicesOutlinedIcon />
            <span>Computers</span>
          </div>


          <div className='sidebar_option'>
            <SupervisorAccountIcon />
            <span>share with me</span>
          </div>

          <div className='sidebar_option'>
            <AccessTimeIcon />
            <span>Recent</span>
          </div>


          <div className='sidebar_option'>
            <StarBorderIcon />
            <span>Stared</span>
          </div>



          <div className='sidebar_option'>
            <DeleteOutlineIcon />
            <span>Trash</span>
          </div>


        </div>

        <hr></hr>

        <div className='sidebar_options'>
          <div className='sidebar_option'>
            <CloudQueueIcon />
            <span>Storage</span>
          </div>

          <div className='progress_bar'>
            <progress size="tiny" value="70" max="100" />
            <span>6. 45 GB of 15 GB used</span>
          </div>

        </div>
      </div>

    </>
  )
}

export default Sidebar
