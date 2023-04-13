import './App.css';
 import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
import Post from './Pages/Post';
import  {Login} from './Pages/Login';
import {Registration} from './Pages/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='bg-blue-500 flex justify-start py-5 pl-5 space-x-8 text-white text-xl '>
        <Link to="/createpost">Ceate a post</Link>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
        </div>
        <Routes>
        
          <Route path='/' exact Component={Home}/>
          <Route path='/createpost' exact Component={CreatePost}/>
          <Route path='/post/:id' exact Component={Post}/>
          <Route path='/login' exact Component={Login}/>
          <Route path='/registration' exact Component={Registration}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
