











import React from 'react'



const Product=(props)=>{
    console.log(props)
   
    let product = props.data.find(p => p.id === parseInt(props.match.params.productId));
  console.log(product)
     
      return (
        <div>
          {product.name}
          <br/>
          {product.description}
          <br/>
          {product.status}
          
        </div>
      );
}
export default Product;