import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {uploadVideoAPI} from '../../serivce/allAPI'

function Add({setUploadVideoResponse}) {
  
  const[uploadVideo,setUploadVideo] = useState({
    id: "", caption:"", url:"", link:""
  })

  const getYoutubeLink =(e) => {
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`});
    }
    else{
      setUploadVideo({...uploadVideo,link:""});
    }
  }
  // console.log(getYoutubeLink);

  const handleAdd =async() => {
    const{id,caption,url,link}=uploadVideo
    if(!id || !caption || !url || !link){
      alert("Please fill all the fields");
    }
    else{
      //store video details to the json server
      const result =await uploadVideoAPI(uploadVideo)
    if(result.status>=200 && result.status<=300){
      //success
      handleClose()
      //alert
      alert("upload successfully")
      //after getting sucess reponse field shoud be empty
      setUploadVideo({
        id: "", caption: "", url: "", link: ""
      })
      setUploadVideoResponse(result.data)
    }
    else{
      console.log(result.message);
    }
  }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-center">
        <h5 className='text-light fs-2 fw-bold'>Upload Videos</h5>
        <Button style={{background:"transparent"}} onClick={handleShow} className='ms-2 shadow-0'>
        <i className="fa-solid fa-arrow-up-from-bracket  mb-2 fs-2 "></i></Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
           <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingInput" label=" Enter Video Id" className="mb-3">
          <Form.Control type="text" placeholder="Enter Video Id" onChange={(e) => setUploadVideo({...uploadVideo,id:e.target.value})}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingTitle" label="Video Title">
          <Form.Control type="text" placeholder="Video Title" onChange={(e) => setUploadVideo({...uploadVideo,caption:e.target.value})} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Image url" className="mb-3 mt-3">
          <Form.Control type="text" placeholder="Image Url" onChange={(e) => setUploadVideo({...uploadVideo,url:e.target.value})} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingImage" label="Video url">
          <Form.Control type="text" placeholder="Video Url" onChange={getYoutubeLink} />
        </FloatingLabel>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleAdd}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
