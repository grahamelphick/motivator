import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
import firebaseConfig from "../../firebaseConfig";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import { Input, FormBtn } from "../Form";

const LogIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-4"></Col>
                    <Col size="md-4">
                        <h1>Log In</h1>
                        <form onSubmit={handleSubmit}>
                            <label for="email"></label>
                            <Input type="email" name="email" placeholder="Email" />
                            <label for="password"></label>
                            <Input type="password" name="password" placeholder="Password" />
                            <br />
                            <FormBtn type="submit">Login</FormBtn>
                        </form>
                        <br/>
                        <h3>Don't have an account yet? Signup <a href="/signup"><u>here</u></a>.</h3>
                    </Col>
                    <Col size="md-4"></Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogIn;