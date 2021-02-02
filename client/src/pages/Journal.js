import React from "react";
import Journal from "../components/Journal";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css"

function Dashboard() {
    return (
        <Container>
            <Row>
                
                <Col size="md-12">
                    <Journal></Journal>
                </Col>
               
            </Row>
        </Container>
    );
}

export default Dashboard;
