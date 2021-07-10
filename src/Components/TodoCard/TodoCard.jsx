import React from 'react';
import './TodoCard.css';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import {IconContext} from 'react-icons';


function TodoCard (){
    return(
        <div className="todo-card-main-wrapper">
            <div className="todo-text-content">
                <p>Complete Todo App Before June 11th </p>
            </div>

            <div className="date-and-icons">
                <p>sun May 11</p>
                <div className="todo-icons">
                    <div className="check-icon">
                        <IconContext.Provider value={{color:"#309bff", size:"25px"}}>
                            <AiOutlineCheck />
                        </IconContext.Provider>
                    </div>

                    <div className="close-icon">
                        <IconContext.Provider value={{color:"#309bff", size:"25px"}}>
                            <AiOutlineClose />
                        </IconContext.Provider>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TodoCard;
