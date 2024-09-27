import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigateByUrl =useNavigate()
  return (
  <>
  <Row ClassName="mt-5 align-items-center justify-content-between w-100 ">
    <Col></Col>
    <Col lg={5} className='p-5 mt-5'>
    <h1 className='text-light' style={{fontSize:"40px"}}>Welcome to <span className='text-warning fw-bold'>Media-Player</span></h1>
    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam velit est! Temporibus ipsa accusantium quidem minus, ullam consectetur perspiciatis id magni mollitia natus dolorem sint repudiandae perferendis! Excepturi, nostrum!
    Ullam fugit vitae laudantium numquam, commodi dicta quia nostrum saepe non sed, fugiat quaerat odit iusto soluta alias ea ab quibusdam facilis debitis molestiae ut quisquam. Autem aut eligendi molestiae!</p>
    <button onClick={() => navigateByUrl('/home')} className='btn btn-info mt-4'>Get Started</button>
    </Col>
    <Col lg={5} className='p-5'>
    <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" style={{height:'400px'}}/>
    </Col>
  </Row>

  <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
    <h3 className='text-light fw-bold fs-1'>FEATURES</h3>
    <div className='cards mb-5 mt-3 d-flex align-items-center justify-content-between w-100'>
      <Card style={{width:'25rem'}} className='p-4 bg-info'>
        <Card.Img variant='top' height={'300px'} width={'300px'} src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1035.gif'/>
        <Card.Body>
          <Card.Title className='text-dark fw-bold'>Managing Video</Card.Title>
          <Card.Text>Some quick example text to bulid on the card title and make up the bulk of the card's content</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{width:'25rem'}} className='p-4 bg-info'>
        <Card.Img variant='top' height={'300px'} width={'300px'} src='https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif'/>
        <Card.Body>
          <Card.Title className='text-dark fw-bold'>Categorized Video</Card.Title>
          <Card.Text>Some quick example text to bulid on the card title and make up the bulk of the card's content</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{width:'25rem'}} className='p-4 bg-info'>
        <Card.Img variant='top' height={'300px'} width={'300px'} src='https://i.pinimg.com/originals/3e/fe/1c/3efe1cb845954233246f60d5d8395dd0.gif'/>
        <Card.Body>
          <Card.Title className='text-dark fw-bold'>Watch History</Card.Title>
          <Card.Text>Some quick example text to bulid on the card title and make up the bulk of the card's content</Card.Text>

        </Card.Body>
      </Card>

    </div>
  </div>

  <div className='container rounded p-3 mb-5 d-flex align-items-center justify-content-around w-100'>
    <div className='col-lg-5 w-50'>
      <h4 className='text-warning fw-bold fs-1'>Simple, Powerful & fast</h4>
      <h6 className='mb-5 mt-3 text-dark'><span className='text-light fw-bolder fs-4'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident illum optio voluptatibus! Eius labore hic, dicta eos nam impedit omnis magni vel sapiente, nostrum similique molestiae illum vero odit aliquam.
      Ducimus impedit possimus blanditiis tempore itaque porro tempora libero dolorem quaerat voluptas? Laudantium, magnam commodi, nobis vero eum molestias, sint nemo officiis quaerat nesciunt numquam ipsum aut aperiam fugiat blanditiis.</h6>

      <h6 className='mb-5 mt-3 text-dark'><span className='text-light fw-bolder fs-4'>Categorized Videos:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident illum optio voluptatibus! Eius labore hic, dicta eos nam impedit omnis magni vel sapiente, nostrum similique molestiae illum vero odit aliquam.
      Ducimus impedit possimus blanditiis tempore itaque porro tempora libero dolorem quaerat voluptas? Laudantium, magnam commodi, nobis vero eum molestias, sint nemo officiis quaerat nesciunt numquam ipsum aut aperiam fugiat blanditiis.</h6>

      <h6 className='mb-5 mt-3 text-dark'><span className='text-light fw-bolder fs-4'>Managing Videos:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident illum optio voluptatibus! Eius labore hic, dicta eos nam impedit omnis magni vel sapiente, nostrum similique molestiae illum vero odit aliquam.
      Ducimus impedit possimus blanditiis tempore itaque porro tempora libero dolorem quaerat voluptas? Laudantium, magnam commodi, nobis vero eum molestias, sint nemo officiis quaerat nesciunt numquam ipsum aut aperiam fugiat blanditiis.</h6>
    </div>
    <div className='video col-lg-5'>
    <iframe width="100%" height="555" className='rounded-5 shadow' src="https://www.youtube.com/embed/tOM-nWPcR4U?si=iziSoe1t0lyBRbHv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
    </div>
  </div>
  </>
  )
}

export default LandingPage
