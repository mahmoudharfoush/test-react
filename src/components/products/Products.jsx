import React from 'react'
import Product from '../product/Product.jsx'



function Products() {
  const products = [
    {id:1,title:'product one',desc:'this is product one',price:'1000'},
    {id:2,title:'product two',desc:'this is product two',price:'2000'},
    {id:3,title:'product three',desc:'this is product three',price:'3000'},
    {id:4,title:'product four',desc:'this is product four',price:'4000'},
  ];
  return (  
   <div className='container'>
   <div className='row'>
  {products.map((product) => {
    return <Product {...product} key={product.id}/>
  })}

   </div>
   </div>
  )
}

export default Products