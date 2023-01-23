import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Add from './Pages/Add';
import UserLists from './Pages/UserLists';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Add/>} />
        <Route path='/users' element={<UserLists/>} />
      </Routes>
    </Router>
  );
}

export default App;
