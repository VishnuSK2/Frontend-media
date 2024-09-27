
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import WatchHistoy from './Pages/WatchHistory'


function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Watch-History' element={<WatchHistoy/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
