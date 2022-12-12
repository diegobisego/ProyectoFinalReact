import React, { useEffect, useState } from 'react'
import { products } from '../data/products'
import Item from './Item'

function ItemsList() {

    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
      getProduct().then((resp) => {
        console.log(resp);
        setListProducts(resp)
    }).catch((error) => {
        console.log(error);
        // setProducts(error)
    })
    }, [])
    
  
    const getProduct = () => {
      return new Promise((resolve, _reject) => {
          setTimeout(() => {
              resolve(products)
              // reject(`<h1>no se encontraron resultados</h1>`)
          }, 2500);
      })
  }   

  return (
    <div className='d-inline-flex'>{listProducts.map((product) => <Item key={product.id}
       {...product}
       />)}
    </div>
  )
}

export default ItemsList;