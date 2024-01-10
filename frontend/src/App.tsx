import './App.css'
import Forms from './components/Forms/forms'
import {Route,Routes} from "react-router-dom"
import RoomPage from './pages/RoomPage/RoomPage'
const App=()=> {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Forms/>}></Route>
        <Route path="/:roomId" element={<RoomPage/>}/>
      </Routes>
    </div>
  )
}

export default App
