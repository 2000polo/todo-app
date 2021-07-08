import React from 'react';
import './Home.css'
import {BiMenu} from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import { BsGridFill } from 'react-icons/bs';
import { RiSettings3Fill } from 'react-icons/ri';
import { IoStatsChart } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';

const Home = () =>{
    return (
        <div className="home-main-wrapper">
            <div className="todo-main-wrapper">
                <nav>
                    <div className="menu-icon">
                        <IconContext.Provider value={{size:'40px', color:"white" }}  >
                            <BiMenu />
                        </IconContext.Provider>
                    </div>
                </nav>
                <div className="left-menu-side-bar">
                    <div className="menu-list-main-wrapper">
                        <div className="list-wrapper">
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

                </div>

                <div className="todo-main-content-display-section">

                </div>
            </div>
            
        </div>
    )
}

export default Home;