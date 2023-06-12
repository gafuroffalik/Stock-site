import React, {useContext} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import LotItem from "./LotItem";

const LotList = observer(() => {
    const {lot} = useContext(Context)
    console.log(lot)
    return (
        <Row className="d-flex">
            {lot.lots.map(lot =>
                <LotItem key={lot.id} lot={lot} />
                )
            }
        </Row>
    );
});

export default LotList;