import React, { useState } from 'react'
import { Button, Modal, Form } from "react-bootstrap";
import './PitchFrom.css';
import AddIcon from '@mui/icons-material/Add';
function PitchFrom() {
    const [show,setShow]=useState(false);
    const handleShow=()=>{
        setShow(true);
    }
    const handleClose=()=>{
        setShow(false);
    }
  return (
    <>
       <Button className="button f" onClick={handleShow}>
        <AddIcon className='addIcon' sx={{ mr:1}}></AddIcon>
         Pitch Your Idea
      </Button>
    </>
  )
}

export default PitchFrom
