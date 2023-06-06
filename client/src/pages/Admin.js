import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateProduct from "../components/modals/createProduct";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {
    const [productVisible, setProductVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
        </Container>
    );
});

export default Admin;