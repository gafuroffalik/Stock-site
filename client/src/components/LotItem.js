import React from 'react';
import {Card, Col} from "react-bootstrap";

const LotItem = ({lot}) => {
    console.log(LotItem)
    return (
        <Col className="mt-3 align-items-center" md={2}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>{lot.id}</div>
                    <div>состояние: {lot.type}</div>
                </div>
            </Card>
        </Col>
    );
};

export default LotItem;