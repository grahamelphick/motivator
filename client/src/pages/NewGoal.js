import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css"
import Button from "../components/Button";

function NewGoalPage() {
    function createGoal() {
        console.log("Button clicked");
    };

    function createSubtask() {
        console.log("subtask btn clicked");
        const subTasks = document.getElementsByClassName("ST-text-input").map(function() {
            return this.value;
        });
        console.log(subTasks);
        const allSTDiv = document.getElementById("all-subtasks");
        for (let i = 0; i < subTasks.length; i++) {
            allSTDiv.innerHTML = subTasks;
        };

    }

    return (
        <Container>
            <Row>
                <h1>What do you want to do?</h1>
            </Row>
            <Row>
                <Col size="md-3">
                    <input placeholder="Enter goal here"></input>
                    <input type="date"></input>
                </Col>
                <Col size="md-2">
                    <Button onClick={createGoal}>Create Goal</Button>
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col size="md-2">
                    <p>Let's break it down:</p>
                    <input className="ST-text-input" placeholder="Add subtask"></input>
                    <input className="ST-date-input" type="date"></input>
                </Col>
                <Col size="md-2">
                    <Button onClick={createSubtask}>Create Subtask</Button>
                </Col>
            </Row>
            <Row>
                <div id="all-subtasks"></div>
            </Row>
        </Container>
    );
}

export default NewGoalPage;
