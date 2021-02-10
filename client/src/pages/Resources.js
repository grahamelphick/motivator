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
        const goalQuery = [];
        console.log(books.length)
        let i;
        for (i = 0; i < books.length; i++) {

            goalQuery.push(books[i].goal)
        }
        console.log("goalQuery: ", goalQuery);
        console.log("todos: ", books);
        // goalQuery.forEach(createResource);
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

        // function createResource(item, index) {



        //     const options = {
        //         method: 'GET',
        //         url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${goalQuery[index]}&num=10`,
        //         headers: {
        //             'x-rapidapi-key': env.GOOGLE_API_KEY,
        //             'x-rapidapi-host': env.GOOGLE_HOST
        //         }
        //     };

        //     axios.request(options).then(function (response) {
        //         // setResourcesResultsObject({ ...resourcesResultsObject, title: response.data.results[0].title, link: response.data.results[0].link });
        //         // console.log(resourcesResultsObject);
        //         // console.log("response: ", response)
        //         // resResult.push(response.data.results[0])
        //         // console.log("resResult: ", resResult)
        //         setResourcesResults([...resourcesResults, response.data.results[0]])
        //         console.log("resourcesResults: ", resourcesResults)

        //         // resResultLink.push(response.data.results[0].link)
        //         // console.log("resresultLink: ", resResultLink)
        //         // setResourcesResultsLink(resResultLink)
        //         // console.log("resourcesResults: ", resResultLink)
                
        //     }).catch(function (error) {
        //         console.error(error);
        //     });
        // }
    };

    // let goalQuery;
   

    return (
        <Container>            
            <Row>        
                <Col size="md-12">
                    <div>
                        <List>
                                {resourcesResults.map(resResult => (
                                    <ListItem key={resourcesResults._id}>
                                        <a href={resResult.link}>{resResult.title}</a>
                                        {/* {book.goal} */}
                                        {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                                    </ListItem>
                                ))}
                        </List>
                        </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ResourcesPage;
