import React from "react";
import ResourcesList from "../components/ResourcesList";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css"

function ResourcesPage() {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <ResourcesList></ResourcesList>
                </Col>
            </Row>
        </Container>
    );
}

export default ResourcesPage;
