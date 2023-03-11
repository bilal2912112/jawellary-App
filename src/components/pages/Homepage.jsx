import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../products";
import Product from "../../components/Product";
const Homepage = () => {
  return (
    <>
      <h1>Latest Items</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
