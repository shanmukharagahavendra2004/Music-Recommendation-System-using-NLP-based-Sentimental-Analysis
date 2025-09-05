
import './App.css';
import Signup from './Components/Signup';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login.jsx';
import Input from './Components/Input.jsx';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     
     </BrowserRouter> */}
     <Input/>
    </div>
  );
}

export default App;
