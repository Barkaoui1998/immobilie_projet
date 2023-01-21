import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
<Router>
    <div className="App">
       <Routes>
        <Route path="/Login" exact element={<Login /> } />
        <Route path="/SignUp" element={<Signup/> } />      
      </Routes> 
    
    </div>
  </Router>
  );
}

 

export default App;
