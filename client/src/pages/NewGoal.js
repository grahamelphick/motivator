import React, {useState, useEffect} from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css"
import Button from "../components/Button";
import API from "../utils/API"
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";

function NewGoalPage() {
    const [goals, setGoals] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadSubtasks()
    }, [])

    function loadSubtasks() {
        console.log("load ST");
        API.getSubtasks()
            .then(res =>
                setGoals(res.data)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        console.log(formObject)
    };
  
    function createSubtask(event) {
        event.preventDefault();
        console.log("ST btn clicked");
        if (formObject.mainGoal && formObject.subTasks) {
            API.savegoal({
                "mainGoal": formObject.mainGoal,
                "mainGoal.dueDate": formObject.mainGoalDate,
                "subTasks.task": formObject.subTask,
                "subTask.dueDate": formObject.subTaskDate

            })
                .then(res => loadSubtasks())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container>
            <Row>
                <h1>What do you want to do?</h1>
            </Row>
            <Row>
                <Col size="md-3">
                    <input name="mainGoal" placeholder="Enter goal here" onChange={handleInputChange}></input>
                    <input name="mainGoalDate" type="date" onChange={handleInputChange}></input>
                </Col>
                <Col size="md-2">
                    <Button
                        // onClick={createGoal}
                    >Create Goal</Button>
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col size="md-2">
                    <p>Let's break it down:</p>
                    <input name="subTask" className="ST-text-input" placeholder="Add subtask" onChange={handleInputChange}></input>
                    <input name="subTaskDate" className="ST-date-input" type="date" onChange={handleInputChange}></input>
                </Col>
                <Col size="md-2">
                    <Button onClick={createSubtask}>Create Subtask</Button>
                </Col>
            </Row>
            <Row>
                {goals.length ? (
                    <List>
                        {goals.map(goal => (
                            <ListItem key={goal._id}>
                                <Link to={"/goals/" + goal._id}>
                                    <strong>
                                        {goal.subtask} by {goal.duedate}
                                    </strong>
                                </Link>
                                {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </Row>
        </Container>
    );
}

export default NewGoalPage;
