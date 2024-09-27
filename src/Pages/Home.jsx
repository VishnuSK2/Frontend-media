import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'

function Home() {
  const[uploadVideoResponse,setUploadVideoResponse] =useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState({})

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className='add-videos'>
          <Add setUploadVideoResponse={setUploadVideoResponse}/>
        </div>
        <Link to ={'/Watch-History'} className='fw-bold fs-2' style={{textDecoration:'none',color:'white'}}>Watch-History <i className="fa-solid fa-arrow-right-to-bracket "></i></Link>
      </div>
      <div className='container-fluid w-100 mb-5 row p-5'>
        <div className='all-videos col-lg-9'>
          <h1 className='text-light fw-bold text-center'>All Videos</h1>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} />
        </div>
        <div className='all-videos col-lg-3'>
          <Category dropVideoResponse={dropVideoResponse} />
        </div>
      </div>
    </>
  )
}
export default Home
