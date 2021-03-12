import React, { useState, useEffect, useContext } from "react";
import { List, ListItem } from "../components/List";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import "./Goals.css";
import Confetti from 'react-confetti';
import { AuthContext } from "../components/Auth";
import { Redirect } from "react-router-dom";
import useWindowSize from 'react-use/lib/useWindowSize';

function Goals() {
    const [goals, setGoals] = useState([])
    const [formObject, setFormObject] = useState({})
    const [confettiRun, setConfettiRun] = useState(false)

    useEffect(() => {
        loadGoals();
    }, [])

    function loadGoals() {
        API.getGoals()
            .then(res =>
                setGoals(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteGoal(id) {
        setConfettiRun(true);
        API.deleteGoal(id)
            .then(res => loadGoals())
            .catch(err => console.log(err))
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

    const { width, height } = useWindowSize()


    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }


    return (
        <Container fluid>
            <Confetti
                width={width}
                height={height}
                run={confettiRun}
                numberOfPieces={2000}
                recycle={false}
            />
            <Row>
                <Col size="md-3"></Col>
                <Col size="md-6">
                    <br /><br />
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="goal"
                            placeholder="What do you want to do?"
                            id="goalSubmit"
                        />
                        <br/>
                        <FormBtn
                            disabled={!(formObject.goal)}
                            onClick={handleFormSubmit}
                        >
                            Submit
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
