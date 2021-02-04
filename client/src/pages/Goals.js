import React from "react";
import { Route } from 'react-router-dom'
import GoalsList from "../components/GoalsList";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css";
import Button from "../components/Button";
import Resources from "../components/ResourcesList";

function GoalPage() {

    return (
        <Container>
            <Row>
                <Col size="md-6">
                    <GoalsList></GoalsList>
                </Col>
                <Col size="md-6">
                    <Route render={({ history }) => (
                        <Button
                            onClick={() => { history.push('/new-goal') }}
                        >Start something new:</Button>
                    )} />
                    <Resources></Resources>
                </Col>
            </Row>
        </Container>
    );
}

export default GoalPage;
