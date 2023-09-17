import React, {useState} from 'react'
import CategoryButton from '../component/CategoryButton'
import Products from '../component/Products'
import Footer from '../component/Footer'

function MenuPage({ products, category, addOns, handleCart, productArray,categoryArray,handleQuantity}) {
  
  const [selectedCatId, setSelectedCatid] = useState(null);
  const [productItems, setProducts] = useState([]);
  let upperLimit=0;
  let lowerLimit=0;

  const onCatSelection = (index,cat) => {
    setSelectedCatid(index);
    setProducts(productArray.filter((p) => p.category === cat));
  };
  
  const page = (item) => {
    if(upperLimit!==item){
    upperLimit=item;
    lowerLimit=upperLimit-9
    setProducts(productArray.filter((product) =>{
      if(product.id >= lowerLimit && product.id <= upperLimit){
               return product;
      }
      else{
        return ""
      }
    })
    )
  }
  }


  return (
    <>
    <CategoryButton 
    category={category}
    onCatSelection={onCatSelection} 
    selectedCatId={selectedCatId}
    categoryArray={categoryArray}/>

    <Products
     productItems={productItems}
     categoryArray={categoryArray}
     handleCart={handleCart}
     productArray={productArray}
     handleQuantity={handleQuantity}
     />
    
      <Footer page={page} />
    </>
  )
}

export default MenuPage