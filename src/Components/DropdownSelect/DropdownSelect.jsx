import React, { useState } from 'react';
import './DropdownSelect.css';
import { BiDownArrow } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib';

const DropdownSelect = () => {

    const [dropdown, setdropdown] = useState(false);
    const [dropCat, setDropCat] = useState("")

    const dropdownHandler = () => {
        setdropdown(!dropdown);
    }

    const dropCatHandler = (e)=>{
        setDropCat(e.target.innerText);
    }

    const drpcntnt = <div onClick={dropdownHandler} className="dropdown-content-wrapper">
                        <div onClick={(e)=>dropCatHandler(e)} className="tile">
                            <p>Office</p>
                        </div>
                        <div onClick={(e)=>dropCatHandler(e)} className="tile">
                            <p>Academics</p>
                        </div>
                        <div onClick={(e)=>dropCatHandler(e)} className="tile">
                            <p>Home</p>
                        </div>
                    </div>

    return (
        <div className="dropdown-select-main-wrapper">
            <div className={dropCat?"dropdown-text-field clr":"dropdown-text-field clr1"}
                 >
                <div onClick={dropdownHandler} className="drp-field">
                    <label htmlFor="category">{dropCat?dropCat:"Select category"}</label>
                </div>
                <div onClick={dropdownHandler} className="dropdown-down-arrow-icon">
                    <IconContext.Provider value={{color:"#309bff", size:"18px"}} >
                        <BiDownArrow/>
                    </IconContext.Provider>
                </div>
            </div>
            {dropdown&&drpcntnt}
        </div>
    )

}

export default DropdownSelect;