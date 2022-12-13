import React from "react";
import { Link } from "react-router-dom";


// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({id,title,price,picture}) {
  return (
    <Card style={{ width: '15rem' }} className='justify-content-lg-between'>
      <Card.Img variant="top"  src={picture} style={{ objectFit:'scale-down', width:'100%', height:'100%' }}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          "Some quick example text to build on the card title and make up the
          bulk of the card's content."
        </Card.Text> */}
        <Card.Footer>Precio: ${price}</Card.Footer>
        <Link to={`/item/${id}`} className="btn btn-primary">Ver detalles</Link>
      </Card.Body>
    </Card>
  );
}


// function Item({id,title,price,picture}) {
//   return (
//     <div className="">
//       <h2>{title}</h2>
//       <img variant alt={title} src={picture} />
//       <p className="">Precio: ${price}</p>
//       <Link to={`/item/${id}`} className="btn btn-primary">Ver detalles</Link>
//     </div>
//   );
// }

export default Item;
