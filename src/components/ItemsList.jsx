import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import Item from './Item'

function ItemsList() {

    const [listProducts, setListProducts] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
      if (idCategory){
        getProduct().then((resp) => {
          console.log(resp);
          setListProducts(resp.filter(items => items.categories === idCategory))
      }).catch((error) => {
          console.log(error);
      })
      } else {
        getProduct().then((resp) => {
          console.log(resp);
          setListProducts(resp)
      }).catch((error) => {
          console.log(error);
      })
      }
      return () => setListProducts([])
    }, [idCategory])
    
  
    const getProduct = () => {
      return new Promise((resolve, _reject) => {
          setTimeout(() => {
              resolve(products)
          }, 2500);
      })
  }   

  return (
    <div className='d-flex flex-wrap justify-content-sm-around'>
      {products.length
      ?
      listProducts.map((product) => <Item 
      key={product.id}
       {...product}
       />)
       :
       
      <h2 className='text-lg font-bold'>Cargando...</h2>}
    </div>
  )
}

export default ItemsList;