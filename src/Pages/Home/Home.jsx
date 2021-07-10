import React, {Component, useState} from 'react';
import Anime from 'react-anime';
import './Home.css'
import {BiMenu} from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import { BsGridFill, BsArrowLeft } from 'react-icons/bs';
import { RiSettings3Fill } from 'react-icons/ri';
import { IoStatsChart } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import { HiPencil } from 'react-icons/hi'

const Home = () =>{

    const [slidemenu, setSlideMenu] = useState(false);

    return (
        <div on className="home-main-wrapper">
            <div className="todo-main-wrapper">
                <nav>
                    <div onClick={()=>setSlideMenu(!slidemenu)}
                         className="menu-icon">
                        <IconContext.Provider value={{size:'40px', color:"white" }}  >
                            <BiMenu />
                        </IconContext.Provider>
                    </div>
                </nav>
                
                <div className="todo-content-wrapper">
                {
                slidemenu === true &&
                
                    <div className="left-menu-side-bar">
                        <Anime  easing="easeInOutBack"
                                duration={500}
                                direction="normal"
                                delay={(el, index) => index * 100}
                                translateX='600px'
                                opacity="1"
                                >
                        <div className="menu-list-main-wrapper">
                            <div className="list-wrapper">
                            
                                <div onClick={()=>setSlideMenu(!slidemenu)}
                                     className=" back-arrow">
                                    <IconContext.Provider value={{size:'30px', color:"white" }}  >
                                        <BsArrowLeft/>
                                    </IconContext.Provider>
                                    {/* <p className="list-item-name" >Home</p> */}
                                </div>
                                <div className="list-tile-wrapper">
                                    <IconContext.Provider value={{size:'25px', color:"white" }}  >
                                        <AiFillHome/>
                                    </IconContext.Provider>
                                    <p className="list-item-name" >Home</p>
                                </div>
                                <div className="list-tile-wrapper">
                                    <IconContext.Provider value={{size:'25px', color:"white" }}  >
                                        <BsGridFill/>
                                    </IconContext.Provider>
                                    <p className="list-item-name" >Categories</p>
                                </div>
                                <div className="list-tile-wrapper">
                                    <IconContext.Provider value={{size:'25px', color:"white" }}  >
                                        <RiSettings3Fill/>
                                    </IconContext.Provider>
                                    <p className="list-item-name" >Settings</p>
                                </div>
                                <div className="list-tile-wrapper">
                                    <IconContext.Provider value={{size:'25px', color:"white" }}  >
                                        <IoStatsChart/>
                                    </IconContext.Provider>
                                    <p className="list-item-name" >Dashboard</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className="overall-status-main-wrapper">
                            <div className="active-status-tile">
                                <div className="active-tile-content">
                                    <h1>02</h1>
                                    <p>Available active tasks!</p>
                                </div>
                            </div>

                            <div className="done-and-deleted">
                                <div className="done-status-tile">
                                    <div className="status-tile-content">
                                        <h1>04</h1>
                                        <p> Done tasks!</p>
                                    </div>
                                </div>

                                <div className="deleted-status-tile">
                                    <div className="status-tile-content">
                                        <h1>10</h1>
                                        <p>Deleted tasks!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Anime>
                    </div>
                    }
                    <div className="todo-main-content-display-section">
                        <Anime easing="easeInOutExpo"
                               duration={500}
                               direction="reverse"  
                               delay={(el, index) => index * 100}
                               opacity="0"
                               
                               >
                            <div className="main-content-welcome-tile">
                                <h1>Hello!</h1>
                                <p>Good Morning! Check all your Todo's</p>
                            </div>
                        </Anime>
                        
                            <div className="todo-add-button-main-wrapper">
                            <Anime easing="easeOutBack"
                               duration={500}
                               direction="reverse"
                               delay= {(el, index) => index * 100}
                               opacity="0"
                               >
                                <div className="btn-wrapper-position">
                                    <IconContext.Provider value={{size:"30px", color:"white"}} >
                                        <HiPencil />
                                    </IconContext.Provider>
                                </div>
                                </Anime>
                            </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home;