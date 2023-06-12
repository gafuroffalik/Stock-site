import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import AddProduct from "../components/modals/addProduct";
import {observer} from "mobx-react-lite";
import LotList from "../components/LotList";
import {Context} from "../index";
import {fetchLots, fetchOneLot} from "../http/lotAPI";


const Lot = observer(() => {
    const {user} = useContext(Context)
    //console.log(user.getId)
    const {lot} = useContext(Context)
    const [productVisible, setProductVisible] = useState(false)

    useEffect(() => {
        fetchOneLot(user.getId).then(data => lot.setLots(data))
    }, [])

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить устройство в партию
            </Button>
            <AddProduct show={productVisible} onHide={() => setProductVisible(false)}/>


            <Form className="mt-2">
                <Col md={0}>
                    <LotList/>
                </Col>
            </Form>
        </Container>
    );
});

export default Lot;