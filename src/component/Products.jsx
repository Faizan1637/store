import  React from 'react'
import KfcCards from './KfcCards' 


function Products({productItems, productArray,handleQuantity}) {
    
  let prods= productItems.length?(productItems):(productArray);

  return (
    <>
      
        <div className='container'>
        <div className='row  justify-content-center align-items-center'>

          {prods.map((product) => <KfcCards product={product} 
          handleQuantity={handleQuantity} 
          key={product.id} />)}
          </div>
          
          
        </div> 
     </>
  )
  // }
  
}

export default Products