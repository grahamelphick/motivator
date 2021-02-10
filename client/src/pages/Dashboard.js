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
// import { Link } from "react-router-dom";


function Dashboard() {

    // useEffect(() => {
    //     API.getGoalsByUser
    // }, [props.user])

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-3">
                        <GoalsList></GoalsList>
                    </Col>
                    <Col size="md-1"></Col>
                    <Col size="md-3">
                        <Mantra></Mantra>
                        <Journal></Journal>
                    </Col>
                    <Col size="md-2"></Col>
                    <Col size="md-3">
                        <ResourcesList></ResourcesList>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Dashboard





// function Goals() {
//     // Setting our component's initial state
//     const [books, setBooks] = useState([])
//     const [formObject, setFormObject] = useState({})

//     // Load all books and store them with setBooks
//     useEffect(() => {
//         loadBooks()
//     }, [])

//     // Loads all books and sets them to books
//     function loadBooks() {
//         API.getBooks()
//             .then(res =>
//                 setBooks(res.data)
//             )
//             .catch(err => console.log(err));
//     };

//     // Deletes a book from the database with a given id, then reloads books from the db
//     // function deleteBook(id) {
//     //     API.deleteBook(id)
//     //         .then(res => loadBooks())
//     //         .catch(err => console.log(err));
//     // }

//     // Handles updating component state when the user types into the input field
//     function handleInputChange(event) {
//         const { name, value } = event.target;
//         setFormObject({ ...formObject, [name]: value })

//     };

//     // When the form is submitted, use the API.saveBook method to save the book data
//     // Then reload books from the database
//     function handleFormSubmit(event) {
//         event.preventDefault();
//         if (formObject.goal) {
//             API.saveBook({
//                 goal: formObject.goal,
//                 completed: formObject.completed
//             })
//                 .then(res => loadBooks())
//                 .catch(err => console.log(err));
//         }
//     };

//     return (
//         <Container fluid>
//             <Row>
//                 <Col size="md-6">
//                         <h1>What Books Should I Read?</h1>
//                     <form>
//                         <Input
//                             onChange={handleInputChange}
//                             name="goal"
//                             placeholder="Title (required)"
//                         />
//                         {/* <Input
//                             onChange={handleInputChange}
//                             name="author"
//                             placeholder="Author (required)"
//                         />
//                         <TextArea
//                             onChange={handleInputChange}
//                             name="synopsis"
//                             placeholder="Synopsis (Optional)"
//                         /> */}
//                         <FormBtn
//                             disabled={!(formObject.goal)}
//                             onClick={handleFormSubmit}
//                         >
//                             Submit Book
//               </FormBtn>
//                     </form>
//                 </Col>
//                 <Col size="md-6 sm-12">
//                         <h1>Books On My List</h1>
//                     {books.length ? (
//                         <List>
//                             {books.map(book => (
//                                 <ListItem key={book._id}>
//                                             {book.goal}
//                                     {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
//                                 </ListItem>
//                             ))}
//                         </List>
//                     ) : (
//                             <h3>No Results to Display</h3>
//                         )}
//                 </Col>
//             </Row>
//         </Container>
//     );
// }


// export default Goals;
