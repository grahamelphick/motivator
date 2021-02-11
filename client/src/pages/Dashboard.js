import React, { useState, useEffect } from "react";
import Mantra from "../components/Mantra";
import { List, ListItem } from "../components/List";
import ResourcesList from "../components/ResourcesList";
import Journal from "../components/Journal";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import GoalsList from "../components/GoalsList";

function Dashboard() {

    // useEffect(() => {
    //     API.getGoalsByUser
    // }, [props.user])

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-6">
                        <GoalsList></GoalsList>
                    </Col>
                    <Col size="md-6">
                        <ResourcesList></ResourcesList>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Dashboard