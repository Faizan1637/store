import React from 'react'

function CartViewOffCanvas({ cart, setCart }) {

  // let[qty,setQty]=useState([cart]);

  const handleQtyDecrement=(item)=>{
    let index = cart.findIndex((x) => x.id === item.id);
      let updateCart = [...cart]
        if(updateCart[index].quantity>1)
      updateCart[index].quantity =  updateCart[index].quantity-1
      setCart(updateCart)
  }

  const handleQtyIncrement=(item)=>{
    let index = cart.findIndex((x) => x.id === item.id);
      let updateCart = [...cart]
      updateCart[index].quantity = updateCart[index].quantity+1;
      setCart(updateCart)
  }

  const handleRemove = (item) => {
    setCart(cart.filter((p) => {
      if (item.id !== p.id){
        return p;
      }else{
        return ""
      }
    }))
  }

  return (
    <>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight-1" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Cart</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className='container border border-secondary'>
            {cart.map((item) => (
              <div className='row .d-flex  align-items-center border' key={item.id}>
                <div className='col-sm-3'>
                  <img src={item.image} className='img-fluid' alt={item.title} />
                </div>
                <div className='col-sm-3'>{item.title}</div>
                <h6 className='col-sm-3'>Rs:{item.price}</h6>
                <h6 className='col-sm-2'>Total:{item.quantity * item.price}</h6>
              
                <div className='d-flex flex-row justify-content-center'>              
                  <button style={{backgroundColor:"green",color:"white",borderRadius:"6px"}}
                  onClick={()=>handleQtyIncrement(item)}>+</button>
                  <h4 style={{margin:"4px"}}>{ item.quantity }</h4>
                  <button style={{ backgroundColor: "red", color: "white", borderRadius: "6px", marginRight:"19px"} }
                  onClick={()=>handleQtyDecrement(item)}>-</button>
                  <button className=' btn btn-danger' onClick={() => handleRemove(item)}>Remove</button>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CartViewOffCanvas