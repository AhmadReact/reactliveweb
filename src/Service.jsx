import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Service = () =>{
console.log(Sdata);

return (
<>

<div className="my-5">
|<h1 className="text-center">Our Services</h1>
</div>

<div className="container-fluid service">
        <div className="row">
        <div className="col-10 mx-auto">

        <div className="row gy-4">

{
    Sdata.map((val,index)=>{

       return <Card key={index} title={val.title}  imgsrc={val.src} ></Card>
        

    })

}

    
 
 


</div>


</div>
</div>
</div>



</>
)

}

export default Service;