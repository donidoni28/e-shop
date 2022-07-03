import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function CartItem({ id, state, onButtonClick }) {
    let cout = state.price * state.number
    let handleClick = () => {
        onButtonClick(id)
    }
    return (
        <Row >
            <Col>
                <p >produit: {state.product}</p>
            </Col>

            <Col>
                <p > X {state.number}</p>
            </Col>

            <Col>
                <p >cout: {cout}€</p>
            </Col>
            <Col>
                <p onClick={handleClick}>Delet 1X</p>
            </Col>
        </Row>
    )
}
