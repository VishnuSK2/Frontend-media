import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getCategoryAPI, getVideoAPI, updateCategoryAPI } from '../../serivce/allAPI';
import VideoCard from './VideoCard';

function Category(dropVideoResponse) {
  const[categoryName,setCategoryName]=useState("")
  const[allCategories,setAllCategories]=useState([])
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd=async()=>{
    if(categoryName){
      const result= await addCategoryAPI({categoryName,allVideos:[]})
      // console.log(result);
      if(result.status>=200 && result.status < 300){
        handleClose()
        setCategoryName("")
        getCategories()
      }else{
        alert(result.message)
      }
    }else{
      alert("Please add a category name")
    }
  }

  const getCategories=async() =>{
    const {data}=await getCategoryAPI()
    setAllCategories(data)
  }
  useEffect(() =>{
    getCategories()
  },[{dropVideoResponse}])
  // console.log(allCategories);

  const removeCategory=async(id) =>{
    await deleteCategoryAPI(id)
    getCategories()
  }

  const dragOver=(e) =>{
    // console.log("Videocard dragging over the category");
    e.preventDefault()
  }
  const videoDropped=async(e,categoryId)=>{
    const VideoId =e.dataTransfer.getData("VideoId")
    // console.log("Video Id: "+VideoId+" dropped on category, id: "+categoryId);
    const {data}=await getVideoAPI(VideoId)
    // console.log(data);
    const selectedCategory = allCategories.find(item => item.id === categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    await updateCategoryAPI(categoryId, selectedCategory)
    getCategories()
  }

  const videoDraggStarted=(e,VideoId,categoryId)=>{
    let dataShare={VideoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }
  
  return (
    <div>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-info p-3 fs-6 fw-bold shadow rounded-6'>Add Category</button>
      </div>

      {
        allCategories?.length>0?allCategories.map(Category =>(
          <div className='rounded-6 mt-3 p-2 bg-info shadow' droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={e=>videoDropped(e,Category.id)}>
             <div className='d-flex justify-content-between align-items-center'>
               <h2  className='fw-bold text-light fs-3 ms-3 mt-2'>{Category.categoryName}</h2>
               <button className='btn shadow-0' onClick={()=>removeCategory(Category.id)}>
                  <i className='fa-solid fa-trash text-light fs-3 p-2 rounded-2 bg-danger shadow'></i>
                </button>
             </div>
             <Row>
              {
                Category?.allVideos?.length>0?Category?.allVideos.map(card => (
                  <Col sm={12} draggable onDragStart={e=>videoDraggStarted(e,card.id,Category.id)}>
                    <VideoCard video={card} insideCategory={true} />
                  </Col>
                )):null
              }
             </Row>
          </div>
        )):<p className='fs-4 text-light mt-4 ms-2 fw-bold'>Nothing to display...</p>
      }
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='fs-5 fw-bold'>CATEGORY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
             <FloatingLabel controlId="floatingName" label="Category" className="mb-3">
               <Form.Control className='rounded-6 border border-secondary border-2' type="text" placeholder="Enter category Name" onChange={e =>setCategoryName(e.target.value)} />
             </FloatingLabel>
          </Form>
        </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>cancel</Button>
             <Button variant="primary" onClick={handleAdd}>Add</Button>
           </Modal.Footer>
      </Modal>  
    </div>
  )
}

export default Category
