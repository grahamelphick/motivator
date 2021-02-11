import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import axios from "axios";
import Container from "../Container";
import Col from "../Col";
import Row from "../Row";
import { List, ListItem } from "../List";
import env from "react-dotenv";

function ResourcesList() {
    const [goals, setGoals] = useState([])
    const [resourcesResults, setResourcesResults] = useState([])

    useEffect(() => {
        loadGoals();
    }, [])

    useEffect(() => {
        loadResources();
    }, [goals])

    function loadGoals() {
        API.getGoals()
            .then(res =>
                setGoals(res.data),
            ).catch(err => console.log(err));
    };

    function loadResources() {
        const goalQuery = [];
        console.log(goals.length)
        let i;
        for (i = 0; i < goals.length; i++) {

            goalQuery.push(goals[i].goal)
        }
        console.log("goalQuery: ", goalQuery);
        console.log("todos: ", goals);
        const requests = goalQuery.map(item => {
            const options = {
                method: 'GET',
                url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${item}&num=10`,
                headers: {
                    // 'x-rapidapi-key': env.GOOGLE_API_KEY,
                    'x-rapidapi-host': env.GOOGLE_HOST
                }
            };

            return axios.request(options)
        })
        Promise.all(requests).then((values) => {
            setResourcesResults(values.map(value => value.data.results[0]))
            console.log(resourcesResults)
        })
    }

    return (
        <Container>
            <h1><a href="/resources">My Resources</a></h1>
            <Row>
                <Col size="md-12">
                    <div>
                        <List>
                            {resourcesResults.map(resResult => (
                                <ListItem key={resourcesResults._id}>
                                    <a href={resResult.link}>{resResult.title}</a>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ResourcesList