import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addHistoryAPI, deleteVideoAPI } from '../../serivce/allAPI';

function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = async() => { setShow(true)
    const{caption,link} =video
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric', month:"2-digit", day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'
    }).format(today)
    // console.log( new Intl.DateTimeFormat('en-US',{year:'numeric', month:"2-digit", day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'
    // }).format(today));

    let videoHistory ={caption,link,timeStamp}
    await addHistoryAPI(videoHistory)
  }

  const deleteVideo =async (id) =>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragstart=(e,id)=>{
    console.log("Drag Started...VideoId:" + id);
    e.dataTransfer.setData("VideoId", id)
  }

  return (
    <div>

      <Card style={{height:'30rem', marginBottom:'14px', marginTop:'25px'}} draggable onDragStart={e => dragstart(e,video?.id)}>
        <Card.Img variant="top" src={video.url} onClick={handleShow} style={{height:'330px'}} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-item-center'>
            <h5 className='text-dark fs-3 mt-2'>{video.caption}</h5>
            { 
              insideCategory?null:
              <Button onClick={()=>deleteVideo(video.id)} className='btn shadow-0' style={{background:"white"}}><i className='fa-solid fa-trash text-light fs-3 p-2 rounded-2 bg-danger shadow'></i></Button>}
          </Card.Title>
        </Card.Body>
      </Card>
      
      <Modal show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="560" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='w-100 rounded-5' allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard
