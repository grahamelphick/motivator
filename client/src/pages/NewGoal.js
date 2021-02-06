import React, {useState, useEffect} from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css"
import Button from "../components/Button";
import API from "../utils/API"
import GoalPage from "./Goals";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";

function NewGoalPage() {
    // function createGoal() {
    //     console.log("goal Button clicked");
    // };

    // function createSubtask() {
    //     console.log("subtask btn clicked");
    //     const subTasks = document.getElementsByClassName("ST-text-input").map(function() {
    //         return this.value;
    //     });
    //     console.log(subTasks);
    //     const allSTDiv = document.getElementById("all-subtasks");
    //     for (let i = 0; i < subTasks.length; i++) {
    //         allSTDiv.innerHTML = subTasks;
    //     };

    // }

    const [subtasks, setSubtasks] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all subtasks and store them with setsubtasks
    useEffect(() => {
        loadSubtasks()
    }, [])

    // Loads all subtasks and sets them to subtasks
    function loadSubtasks() {
        console.log("load ST");
        API.getSubtasks()
            .then(res =>
                setSubtasks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a goal from the database with a given id, then reloads subtasks from the db
    // function deleteGoal(id) {
    //     API.deleteGoal(id)
    //         .then(res => loadsubtasks())
    //         .catch(err => console.log(err));
    // }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        console.log(formObject)
    };

    // When the form is submitted, use the API.savegoal method to save the goal data
    // Then reload subtasks from the database
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
                {subtasks.length ? (
                    <List>
                        {subtasks.map(book => (
                            <ListItem key={book._id}>
                                <Link to={"/books/" + book._id}>
                                    <strong>
                                        {book.title} by {book.author}
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
