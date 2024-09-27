import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllUploadedVideosAPI, getCategoryAPI, updateCategoryAPI } from '../../serivce/allAPI'

function View({uploadVideoResponse, setDropVideoResponse}) {
  const [allVideos,setAllVideos]=useState([])
  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)

  useEffect(()=>{
    getAllUploadedVideos();
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getAllUploadedVideos =async()=>{
    const result=await getAllUploadedVideosAPI()
    // console.log(result);
    if(result.status==200){
      setAllVideos(result.data)
    }
    else{
      setAllVideos([])
      console.log("API Failed");
    }
  }

  const videoDragOver =(e) =>{
    e.preventDefault()
  }

  const videoDropp=async (e) =>{
    const{VideoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
    console.log(VideoId,categoryId);
    const {data} =await getCategoryAPI()
    // console.log(data);
    const selectedCategory= data.find(item => item.id==categoryId)
    let result=selectedCategory.allVideos.filter(video => video.id !== VideoId)
    // console.log(result);
    let {id, categoryName} =selectedCategory
    let newCategory={id,categoryName,allVideos:result}
    // console.log(newCategory);
    const res=await updateCategoryAPI(categoryId,newCategory)
    // console.log(res);
    setDeleteVideoResponse(res)
  }
  // console.log(allVideos);
  return (
    <>
    <Row droppable="true" onDragOver={(e)=>videoDragOver(e)} onDrop={e=>videoDropp(e)}>
      {
        allVideos?.length>0?allVideos.map(video =>(
        <Col sm={12} md={6} lg={4} xl={3}>
          <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse} setDropVideoResponse={setDropVideoResponse} />
        </Col>
        )):<p className='fs-1 fw-bold text-light'>Nothing to display</p>
      }
    </Row> 
    </>
  )
}
export default View
