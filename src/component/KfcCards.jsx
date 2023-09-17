import React from 'react'
import {useNavigate } from 'react-router-dom';



function KfcCards({product,handleQuantity}) {
    let {title,id,image,descr,price}=product;
    const navigate = useNavigate();

    const handle = (id) => {
        navigate(`/product/${id}`);
    }

    return(
    <div className="col-md-6 col-lg-4 col-sm-12 mt-2 col-xl-4 d-flex justify-content-center ">
    <div className="card" style={{width:"18rem"}}>
    <img className="card-img-top" src={image} alt={title} />        
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{descr}</p>
    <h5>Rs:{price}</h5>


    <button className="btn btn-danger"
     onClick={()=>{
                   handleQuantity(1)
                   handle(id) }
    }>Give Order-Detail
    </button>


    </div>
    </div>
    </div>
     )
}

export default KfcCards