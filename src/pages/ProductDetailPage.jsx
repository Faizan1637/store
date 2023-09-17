import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import Swal from "sweetalert2";




const handleClick = () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Added to Cart Succcessfully",
        showConfirmButton: false,
        timer: 1500,
    });
};


function ProductDetailPage({productArray,quantity,handleQuantity,handleCart}) {

      let { id } = useParams();
      let product = {};
      product=productArray.find(p => p.id === Number(id))

    const getTotal = () => {
        return productArray.length ? quantity * product.price : 0;
    };

    const disableBtn = () => {
        return quantity > 1 ? false : true;
    };

    let navigate = useNavigate();
    const handleBack = () =>{
        navigate("/menu")
    }

    return (
        <>
            <button onClick={handleBack} className='btn btn-primary'>Back To Menu</button>
            <div className='container mt-1'>   
                    {productArray.length ? (
                        <div className=' row '>
                        <div className='col-md-6 col-sm-12 col-lg-4 col-12'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    className="card-img-top"
                                    src={product.image}
                                    alt={product.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.descr}</p>
                                    <h2>Rs:{product.price} per item</h2>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-6 col-sm-12 col-lg-8 col-12'>
                                <h2>Description</h2>
                                <p>{product.description}</p>
                            </div>
                        
                        </div>
                    ) : (
                        <h2>Empty</h2>
                    )}
                    <div className="d-flex justify-content-center flex-column align-items-center mt-3">
                        <div>
                            <button
                                className="btn btn-success"
                                onClick={() => handleQuantity(quantity + 1)}
                            >
                                +
                            </button>
                            {quantity}
                            <button
                                className="btn btn-danger"
                                disabled={disableBtn()}
                                onClick={() => handleQuantity(quantity - 1)}
                            >
                                -
                            </button>
                        </div>
                        <div>
                            <h3>Select Quantity</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className="btn btn-danger w-30"
                        onClick={() => {
                            handleCart({ ...product, quantity});
                            handleClick();
                        }}
                    >
                        Rs {getTotal()} Add To Cart
                    </button>
                </div>
        </>
    );
}

export default ProductDetailPage