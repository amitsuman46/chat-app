import {Routes, Route, Navigate} from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
function App() {


  return (
    <>
    <Container>
     <Routes>
      <Route path="/" element={<Chat/>} />
      <Route path="/register" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<Navigate to="/"/>} />
     </Routes>
    </Container>
    </>
  )
}

export default App
