import React from "react";
import { Button, Card } from "react-bootstrap";
const StoreItem = ({ id, name, price, imgUrl }) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">({price})</span>
        </Card.Title>
        <div className="mt-auto">
          
            <Button className="w-100" >
              Add To Cart
            </Button>
           
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">in cart</span>
                </div>
                <Button >+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
               
              >
                Remove
              </Button>
            </div>
        
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
