import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import "./Goals.css"

function Goals() {
    const [goals, setGoals] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadGoals()
    }, [])

    function loadGoals() {
        API.getGoals()
            .then(res =>
                setGoals(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteGoal(id) {
        API.deleteGoal(id)
            .then(res => loadGoals())
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })

    };

    function handleFormSubmit(event) {
        document.getElementById("goalSubmit").value = "";
        event.preventDefault();
        if (formObject.goal) {
            API.saveGoal({
                goal: formObject.goal,
                completed: formObject.completed
            })
                .then(res => loadGoals())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-3"></Col>
                <Col size="md-6">
                    <br /><br />
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="goal"
                            placeholder="Enter Goal"
                            id="goalSubmit"
                        />
                        <br/>
                        <FormBtn
                            disabled={!(formObject.goal)}
                            onClick={handleFormSubmit}
                        >
                            Submit Goal
                        </FormBtn>
                        <br/><br/>
                    </form>
                    <h1>My Goals</h1>
                    {goals.length ? (
                        <List>
                            {goals.map(goal => (
                                <ListItem key={goal._id}>
                                    {goal.goal}
                                    <DeleteBtn onClick={() => deleteGoal(goal._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3> <br/>No goals yet... time to make some!</h3>
                        )}
                </Col>
                <Col size="md-3"></Col>
            </Row>
        </Container>
    );
}


export default Goals;
