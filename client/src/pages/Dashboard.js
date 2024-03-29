import React, { useContext } from "react";
import DisplayMantra from "../components/DisplayMantra";
// import { List, ListItem } from "../components/List";
import ResourcesList from "../components/ResourcesList";
// import Journal from "../components/Journal";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css";
// import API from "../utils/API";
// import { Input, TextArea, FormBtn } from "../components/Form";
import GoalsList from "../components/GoalsList";
import firebaseConfig from "../firebaseConfig";
import { AuthContext } from "../components/Auth";
import { Redirect } from "react-router-dom";
import JournalList from "../components/JournalList";

function Dashboard() {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
        <div>
            <br />
            <Container>
                <Row>
                    <Col size="md-4"></Col>
                    <Col size="md-4">
                    <DisplayMantra></DisplayMantra>
                    </Col>
                    <Col size="md-4"></Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col size="md-3">
                        <GoalsList></GoalsList>
                    </Col>
                    <Col size="md-1"></Col>
                    <Col size="md-4">
                        <JournalList></JournalList>
                    </Col>
                    <Col size="md-1"></Col>
                    <Col size="md-3">
                        <ResourcesList></ResourcesList>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Dashboard