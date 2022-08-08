import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
  import Resume from './CV/My_CV';
  import NavBar from './navbar';
  import Home from './home';
  import NotFound from './not-found';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='container'>
      

<div style={{height:"50%", backgroundColor:"lime", textAlign:"center", }}> <NavBar/>    
      
      </div>
     

     <div >
     <Routes>
          <Route path="/myresume" element={<Resume/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
         
          
          
          <Route path="*" element={<NotFound/>}></Route>
          {/* <Route> exact path="/" element={<NavBar/>}</Route> */}
         


        </Routes> 

     </div>




      </div>
      
      
       

      
        

      
    
  );
}

export default App;
