import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Error = ({ show, onHide }) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ошибка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Вам отказано в доступе!</h4>
                <p>
                    Попробуйте войти в личный кабинет с нужным доступом!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Error;