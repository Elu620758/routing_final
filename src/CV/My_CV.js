import React from 'react';
import { icons } from 'react-icons';
import './cv.css';
// import '../img/elu02.png.png';
import IoLocationSharp, { FaSuperscript } from 'react-icons/fa'
import { MdOutlineMyLocation } from 'react-icons/md';
import {ImMobile} from 'react-icons/im';
import {GrMail} from 'react-icons/gr';
import {FaSwimmer} from 'react-icons/fa';
import {RiMotorbikeFill} from 'react-icons/ri';
import {HiOutlineCube} from 'react-icons/hi';
import {GiClick} from 'react-icons/gi';
import {MdScreenSearchDesktop} from 'react-icons/md';
// import { Link , Switch, Route} from 'react-router-dom';
// import SearchList from './Searchlist/Searchlist';
// import Movie from './Movie';
// import ShoppingList from './ShoppingList';


function Resume() {
    return (

      <div className='page'>
            <div className='contain'>
                <div className='left-side'>
                    <div className='profileText'>
                        <div className='imgbx'>
                            <img className='img' src={require("./img/elu02.png.png")} alt={"elu"}></img>
                            
                            
                            </div>
                            {<h2>Elumalai P <br/><span>UI Developer</span></h2>}
                            </div>
                            
                 <div className='contactinfo'>
                    {<h3 className='title'>Contact Info</h3>}
                    <ul>
                        <li className='list'>
                            <span className='icon'><ImMobile/></span> <span className='text'>7904457579</span>
                                                        
                        </li>
                        <li className='list'>
                            <span className='icon'><GrMail/></span> <span className='text'>   elumalai620758@gmail.com</span> 
                            
                           
                                                        
                        </li>
                        <li className='list'>
                            
                            <span className='icon'><MdOutlineMyLocation/></span> <span className='text'>Anakaputhur</span>
                            
                            
                                                        
                        </li>
                       
                    </ul>
                </div>

                <div className='contactinfo education'>
                    {<h3 className='title'>Education</h3>}
                    <ul>
                        <li className='list' >
                            <h5 className='text' className="year"><u><b>2021</b></u></h5>
                            <h4 className='text'>Bachelor degree in Bsc mathematics</h4>
                            <h4 className='text'>Agurchand Manmull Jain College Meenambakkam</h4>
                                                       
                        </li>
                        <li className='list' >
                            <h5 className='text' className="year"><u><b>2012</b></u></h5>
                            <h4 className='text'>12<sup>th</sup></h4>
                            <h4 className='text'>Government higher secondary school anakaputhur chennai - 600070</h4>
                                                       
                        </li>
                        <li className='list' >
                            <h5 className='text' className="year"><u><b>2010</b></u></h5>
                            <h4 className='text'>10<sup>th</sup></h4>
                            <h4 className='text'>Government higher secondary school kandachipuram, villupuram - 605701</h4>
                                                       
                        </li>
                    </ul>


                    <div className='contactinfo language'>
                        <h3 className='title'>Language</h3>
                        <ul>
                            <li className='list' >


                                <span className='text'>English</span>
                                <span className='percent'>
                                    <div className='per'></div>                                    
                                </span>

                               
                            </li>
                            <li li className='list'>
                                <span className='text'>Tamil</span>
                                <span className='percent'>
                                    <div className='per2'></div>
                                    
                                </span>
                            </li>
                               
                        </ul>
                        
                    </div>
                </div>             
                </div>                
                <div className='right-side'>
                    <div className='about'>
                        <h2 className='title2'>Declaration</h2>
                        <p className='paragraph'>	I certify that,<br></br>
                            I hereby declare that all the information mentioned is true to the best of my knowledge. to the best of my belief, this CV correctly describes me, my qualifications, and my experience that I am available for the assignments or projects for which I am proposed I will do our work with confidentially and truly.
                            </p>
                    </div>
                    <div className='about'>
                        <h2 className='title2'>Professional Skills</h2>
                        <li li className='list'>
                                <span className='text2'><b>Html</b></span>
                                <span className='percent2'>
                                    <div className='per2'></div>                                    
                                </span>
                            </li>
                            <li li className='list'>
                                <span className='text2'><b>Css</b></span>
                                <span className='percent2'>
                                    <div className='per2'></div>                                    
                                </span>
                            </li>
                            <li li className='list'>
                                <span className='text2'><b>Javascript</b></span>
                                <span className='percent2'>
                                    <div className='per2'></div>                                    
                                </span>
                            </li>
                            <li li className='list'>
                                <span className='text2'><b>React Js</b></span>
                                <span className='percent2'>
                                    <div className='per3'></div>                                    
                                </span>
                            </li>
                            <li li className='list'>
                                <span className='text2'><b>Adobe Photoshop</b></span>
                                <span className='percent2'>
                                    <div className='per4'></div>                                    
                                </span>
                            </li>    

                    </div>
                    <div className='about'>  
                    <h2 className='title2'>Intrests</h2>
                    <ul>
                        <li className='list2'><span className='icon2'> <HiOutlineCube /></span> <span className='textT'><b>Solving puzzles</b></span> </li>
                        <li className='list2'><span className='icon2'><FaSwimmer/></span> <span className='textT'><b> Swimming</b></span> </li>
                        
                        <li className='list2'> <span className='icon2'><RiMotorbikeFill/></span><span className='textT'> <b> Driving</b> </span></li>
                    </ul>

                    </div>     
                    <div className='about'>

                        <h2 className='title2'> My Projects</h2>
                        <ul>
                        {/* <Link to="/myCV/Search"><li className='list2'><span className='icon3'><GiClick/> </span><span className='TextTT'><b>to </b> </span>  <span className='icon3'><MdScreenSearchDesktop/></span><span className='TextTT'><b>Case-Sensitive Search</b></span></li> */}
                        {/* </Link>  */}
                        {/* <Link to="/myCV/Movielist"><li className='list2'><span className='icon3'><GiClick/> </span><span className='TextTT'><b>to </b> </span> <span className='icon3'><MdScreenSearchDesktop/></span><span className='TextTT'><b>Movie list</b></span> </li>
                        </Link>
                        <Link to="myCV/Shopinglist"><li className='list2'><span className='icon3'><GiClick/> </span><span className='TextTT'><b>to </b> </span> <span className='icon3'><MdScreenSearchDesktop/></span><span className='TextTT'><b>shoping list</b></span> </li>
                        </Link> */}
                        </ul>


                        
                                                            
                        
                    </div>  
                    {/* <div> */}
                     {/* <Switch> */}
                            {/* <Route exact path="/myCV/Search"component={SearchList}/>  */}
                            {/* <Route path="/myCV/Movielist"exact component={Movie}/>
                            <Route path="/myCV/Shopinglist"exact component={ShoppingList}/> */}

                        {/* </Switch>  */}
                    {/* </div> */}
                                       

         {/* <a className="App-link" */}
          <a className="App-link"
           href="https://shiny-douhua-0664c4.netlify.app"
          target="_blank"
          rel="noopener noreferrer" >
        <p><b><u style={{color:"red"}}>Click to</u> shoping list</b></p>
      </a>
      <a className="App-link"
           href="https://willowy-gnome-535ac0.netlify.app"
          target="_blank"
          rel="noopener noreferrer" >
        <p><b><u style={{color:"red"}}>Click to</u> Case Sensitive Search</b></p>
      </a>
      <a className="App-link"
           href="https://lambent-pastelito-fbb93b.netlify.app"
          target="_blank"
          rel="noopener noreferrer" >
        <p><b><u style={{color:"red"}}>Click to</u> Pagenation </b></p>
      </a>


                    

                </div>
                </div>
                </div>
            
      
    )
  }
  
  export default Resume;
