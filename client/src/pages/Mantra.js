import React, { useState, useEffect, useContext } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { AuthContext } from "../components/Auth";
import { Redirect } from "react-router-dom";

function EnterMantra() {
  const [mantra, setMantra] = useState("Seize the day!");
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadMantra();
  }, []);

  function loadMantra() {
    API.getMantra()
      .then((res) => setMantra(res.data[0].mantra))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    document.getElementById("mantraSubmit").value = "";
    event.preventDefault();
    if (formObject.mantra) {
      console.log("mantra submitted");
      API.saveMantra({
        mantra: formObject.mantra,
      })
        .then((res) => loadMantra())
        .catch((err) => console.log(err));
    }
  }

  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
          <h1>My Mantra</h1>
          <br />
          <br />
          <h3>
            Your current mantra is "<em>{mantra}</em>"{" "}
          </h3>
          <br />
          <form>
            <Input
              onChange={handleInputChange}
              name="mantra"
              placeholder="Enter a new mantra here"
              id="mantraSubmit"
            />
            <br />
            <FormBtn disabled={!formObject.mantra} onClick={handleFormSubmit}>
              Submit
            </FormBtn>
            <br />
            <br />
          </form>
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </Container>
  );
}

export default EnterMantra;
