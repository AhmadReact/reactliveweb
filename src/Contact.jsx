import React, { useState } from "react";


const Contact = () =>{

const [data,setData] = useState({

    Name:"",
    Email:"",
    Message:"",
    Phone:"",

})


const InputEvent = (event) => {

const {name,value}  = event.target;


setData((prev)=>{

return{  
...prev,
[name]:value

}

})



}


const formSubmit = (e) =>{

e.preventDefault();


alert("My name is "+`${data.Name}`+"\n"+"My email is "+`${data.Email}`+"\n"+"My phone no is "+`${data.Phone}`+"\n\nMessage\n"+`${data.Message}` );
    
}



return (
<>

<div className="my-3">
<h2 className="text-center">Contact Us</h2>
</div>
<div className="container contact_div mb-5">

    <div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form onSubmit={formSubmit}>
    <div className="mb-3">
  <label className="form-label">Full Name</label>
  <input type="text" className="form-control" name="Name" value={data.Name} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter your name" required/>
</div>
  <div className="mb-3">
  <label  className="form-label">Phone</label>
  <input type="text" className="form-control" name="Phone" value={data.Phone} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Mobile no" required/>
</div>
  <div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" className="form-control" name="Email" value={data.Email} onChange={InputEvent} id="exampleFormControlInput1" placeholder="name@example.com" required/>
</div>
<div className="mb-3">
  <label  className="form-label">Message</label>
  <textarea className="form-control" name="Message" value={data.Message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3" required></textarea>
</div>
  <div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>


    </div>
</div>


</>)

}

export default Contact;