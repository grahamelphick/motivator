import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Col from "../Col";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";



function GoalsList() {
    const [goals, setGoals] = useState([])

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
    return (
        <div>
            <Col size="md-6 sm-12">
                <h1><a href="/goals">My Goals</a></h1>
                <List>
                    {goals.map(goal => (
                        <ListItem key={goal._id}>
                            {goal.goal}
                            <DeleteBtn onClick={() => deleteGoal(goal._id)} />
                        </ListItem>
                    ))}
                </List>
            </Col>
        </div>
    )
}
                    
                
                

    export default GoalsList;