import React, { useEffect, useState } from "react";
import ResourcesList from "../components/ResourcesList";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css"
import axios from "axios";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import env from "react-dotenv";


function ResourcesPage() {
    const [books, setBooks] = useState([])
    const [resourcesResults, setResourcesResults] = useState([])

    useEffect(() => {
        loadBooks();
    }, [])

    useEffect(() => {
        loadResources();
    }, [books])

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data),
            )   .catch(err => console.log(err));
    };

    function loadResources() {
        const goalQuery=[];
        console.log(books.length)
        let i;
        for (i = 0; i < books.length; i++) {

            goalQuery.push(books[i].goal)
        }
        console.log(goalQuery);
        console.log(books);
        goalQuery.forEach(createResource, setResourcesResults);
        console.log(resourcesResults)
    

        const resResult = [];

        function createResource(item, index) {


            const options = {
                method: 'GET',
                url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${goalQuery[index]}&num=10`,
                headers: {
                    'x-rapidapi-key': env.GOOGLE_API_KEY,
                    'x-rapidapi-host': env.GOOGLE_HOST
                }
            };

            axios.request(options).then(function (response) {
                resResult.push(response.data.results[0].title)
                console.log(resResult)
                
            }).catch(function (error) {
                console.error(error);
            });
        }
    };

    // let goalQuery;
   

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <ResourcesList>
                        <div>
                            <List>
                                {resourcesResults.map(resResult => (
                                    <ListItem key={resResult._id}>
                                        {/* {book.goal} */}
                                        {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </ResourcesList>
                </Col>
            </Row>
        </Container>
    );
}

export default ResourcesPage;
