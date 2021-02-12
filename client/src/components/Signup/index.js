import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../../firebaseConfig";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import { Input, FormBtn } from "../Form";

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
        } catch (error) {
            alert(error);
        }
    };
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div>
        <Container>
            <Row>
                <Col size="md-4"></Col>
                <Col size="md-4">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <label for="email"></label>
                        <Input type="email" name="email" placeholder="Email" />
                        <label for="password"></label>
                        <Input type="password" name="password" placeholder="Password" />
                        <br />
                        <FormBtn type="submit">Signup</FormBtn>
                        </form>
                        <br/>
                        <h3>Already have an account? Login <a href="/login"><u>here</u></a>.</h3>
                </Col>
                <Col size="md-4"></Col>
            </Row>
            </Container>
        </div>
    );
};

export default SignUp;