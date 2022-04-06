import React from "react";
import { NavLink } from "react-router-dom";



const Common = (props) =>{

    return (
        <>
        <div id="section" className="d-flex align-items-center">
        <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 px-20 order-2 order-lg-1 d-flex justify-content-center flex-column">
        
        
        <h1>{props.name} <strong className="brand-name"> <br></br>Ahmad IT</strong></h1>
             <h4 className="my-3">We are the team of talented developer</h4>
        
             <div className="mt-3">
        
        
                 <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
             </div>
        </div>
        <div className="col-md-6 order-1 order-lg-2 header-img">
        
            <img src={props.imgsrc} className="img-fluid animated"/>
        </div>
        </div>
        
        </div>
        </div>
        
        </div>
        </div>
        </>
        )


} 


export default Common;