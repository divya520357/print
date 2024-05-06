import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from "./signin/index";
import Header from "./Header";
import SignUp from './signup';
import Admin from "./admin/index"

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" Component={SignUp}/>
        <Route path="/signin" Component={Signin}/>
        <Route path="/Admin" Component={Admin}/>
    </Routes>
    </Router>
  );
}

export default App;