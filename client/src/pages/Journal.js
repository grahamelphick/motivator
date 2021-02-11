import React from "react";
import Journal from "../components/Journal";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css"
import Button from "../components/Button";

function JournalPage() {
    return (
        <Container>
            <Row>
                <h1>My Journal</h1>
            </Row>
            <Row>
                <Col size="md-4">
                    <Journal></Journal>
                </Col>
            </Row>
            <Row>
                <Button purpose="Submit Entry"></Button>
            </Row>
        </Container>
    );
}

export default JournalPage;
