import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

const ProductItem = ({product}) => {
    return (
        <Col className="mt-3 align-items-center" md={2}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.img}/>
                <div className="d-flex justify-content-between align-items-center">
                    <div>{product.nameProduct}</div>
                    <div>size: {product.size}</div>
                </div>
            </Card>
        </Col>
    );
};

export default ProductItem;