import React from "react";
import  './menu-item.scss'
import { useNavigate } from "react-router-dom";


const MenuItem = (props) => {
    let navigate = useNavigate()
    return(
        <div className={`${props.size} menu-item`} onClick={()=> navigate(`${props.linkUrl}`)}>          
            <div className="background-image" style={{backgroundImage:`url(${props.imageUrl})`}}></div>           
                <div className={"content"}>
                    <h1 className="title">{props.title.toUpperCase()}</h1>
                    <span className="subtitle"></span>
                </div>           
        </div>
    )
}

export default MenuItem