import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteHistoryAPI, getHistoryAPI } from '../../serivce/allAPI';

function WatchHistory() {
  const[history,setHistory]=useState([])

  useEffect(() => {
    getHistory()
  },[])

  const getHistory = async() =>{
    const result = await getHistoryAPI()
    console.log(result);
    if(result.status ==200){
      setHistory(result.data)
    }else{
      console.log('API Failed');
      console.log(result.message);
    }
  }
  // console.log(history);

  const removeHistory=async(id) => {
    await deleteHistoryAPI(id)
    getHistory()
  }

  return (
  <>
    <div className='container-fluid d-flex justify-content-between p-5'>
      <h2 className='text-light fw-bold mt-2'>Watch History</h2>
      <Link className='text-light fw-bold fs-3' style={{textDecoration:'none',color:'white'}}to={'/Home'}>Back to home <i class="fa-solid fa-arrow-rotate-left"></i></Link>
    </div>
    <table className='table mb-5 container shadow w-100'>
      <thead>
        <tr>
          <th className='fs-5 text-light fw-bold text-center'>#</th>
          <th className='fs-5 text-light fw-bold text-center'>Caption</th>
          <th className='fs-5 text-light fw-bold text-center'>URL</th>
          <th className='fs-5 text-light fw-bold text-center'>TimeStamp</th>
          <th className='fs-5 text-light fw-bold text-center'>Action</th>
        </tr>
      </thead>
      <tbody>
        {history?.length>0?history.map((video,index) =>(
          <tr>
              <td className='fs-6 text-light text-center'>{index+1}</td>
              <td className='fs-6 text-light text-start'>{video.caption}</td>
              <td className='fs-6 text-light text-center'>
              <a href={video.link} className='fs-6 text-light text-center'>{video.link}</a></td>
              <td className='fs-6 text-light text-center'>{video.timeStamp}</td>
              <td className='fs-6 text-light text-center'><button onClick={() => removeHistory(video?.id)} className='btn'><i className='fa-solid fa-trash fs-6 text-light'></i></button></td>
          </tr>)):
              <p className='fs-1 fw-bold text-light ms-3'>Nothing to display</p>
        }
      </tbody>
    </table>
  </>
  );
}

export default WatchHistory
