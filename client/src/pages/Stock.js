import React, {useContext, useEffect} from 'react';
import {Col, Container, Form} from "react-bootstrap";
import ProductList from "../components/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchProducts} from "../http/productAPI";


const Stock = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchProducts().then(data => product.setProducts(data.rows))
    })

    return (
        <Container>
            <Form className="mt-2">
                <Col md={0}>
                    <ProductList />
                </Col>
            </Form>
        </Container>
    );
});

export default Stock;