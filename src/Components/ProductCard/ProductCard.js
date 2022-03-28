import React from "react"
import {Card , Button} from "react-bootstrap"
import "./ProductCard.css"
export const ProductCard =(props)=>{
const product = props.product
     return (
         <div className='ProductCard' >
    <Card style={{ width: "10rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "300px" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text> {product.price}</Card.Text>
          <Button variant="primary">Buy </Button>
        </Card.Body>
      </Card>
         </div>
     )
}