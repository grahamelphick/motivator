// import React from "react";

// // This file exports both the List and ListItem components

// export default function Goals({ children }) {
//   return (
//     <div className="list-overflow-container">
//       <ul className="list-group">{children}</ul>
//     </div>
//   );
// }

// export default function GoalListItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }


import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Col from "../Col";
import { List, ListItem } from "../List";



function GoalsList() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };
    return (
        <div>
            <Col size="md-6 sm-12">
                <h1>Books On My List</h1>
                <List>
                    {books.map(book => (
                        <ListItem key={book._id}>
                            {book.goal}
                            {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                        </ListItem>
                    ))}
                </List>
            </Col>
        </div>
    )
}
                    
                
                

    export default GoalsList;