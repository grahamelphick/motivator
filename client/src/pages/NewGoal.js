import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css"
import Button from "../components/Button";

function Dashboard() {
    return (
        <Container>
            <Row>
                <h1>What do you want to do?</h1>
            </Row>
            <Row>
                <Col size="md-3">
                    <input placeholder="Enter goal here"></input>
                </Col>
                <Col size="md-2">
                    <Button purpose="Confirm goal"></Button>
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col size="md-2">
                    <p>Let's break it down:</p>
                    <input placeholder="Add subtask"></input>
                    <input type="date"></input>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
