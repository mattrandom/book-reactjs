import React, { Component } from "react";
import { Container, Navbar, Col } from "react-bootstrap";

export default class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();

        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{fullYear}-{fullYear + 1}@All rights reserved by mattrandom.</div> 
                    </Col>
                </Container>
            </Navbar>
        );
    }

}