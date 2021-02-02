import React from "react";
import Mantra from "../components/Mantra";
import GoalsList from "../components/GoalsList";
import ResourcesList from "../components/ResourcesList";
import Journal from "../components/Journal";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css"

function Dashboard() {
    return (
        <Container>
            <Row>
                <Col size="md-4">
                    <GoalsList></GoalsList>
                </Col>
                <Col size="md-4">
                    <Mantra></Mantra>
                    <Journal></Journal>
                </Col>
                <Col size="md-4">
                    <ResourcesList></ResourcesList>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
