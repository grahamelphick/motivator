import React, { useState, useEffect, useContext } from "react";
import { List, ListItem } from "../components/List";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import "./pages.css";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import "./Goals.css";
import Confetti from "react-confetti";
import { AuthContext } from "../components/Auth";
import { Redirect } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import Button from "../components/Button";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.75)",
    },
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};

Modal.setAppElement("#root");

function Journals() {
  //   var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [modalEntry, setModalEntry] = useState();

  function openModal(journalTitle, journal) {
    setIsOpen(true);
    setModalTitle(journalTitle);
    setModalEntry(journal);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function displayEntry(journalTitle, journal) {
      openModal(journalTitle, journal);
    // alert(journal)
  }

  const [journals, setJournals] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadJournals();
  }, []);

  function loadJournals() {
    API.getJournals()
      .then((res) => setJournals(res.data))
      .catch((err) => console.log(err));
  }

  function deleteJournal(id) {
    API.deleteJournal(id)
      .then((res) => loadJournals())
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    document.getElementById("journalSubmit").value = "";
    document.getElementById("journalTitle").value = "";
    event.preventDefault();
    if (formObject.journal) {
      API.saveJournal({
        journalTitle: formObject.journalTitle,
        journal: formObject.journal,
        completed: formObject.completed,
      })
        .then((res) => loadJournals())
        .catch((err) => console.log(err));
    }
  }

  const { width, height } = useWindowSize();

  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-4">
          <h1>My Journal Entries</h1>
          {journals.length ? (
            <List>
              {journals.map((journal) => (
                <Button
                  onClick={() =>
                    displayEntry(journal.journalTitle, journal.journal)
                  }
                >
                  <ListItem key={journal._id}>
                    {journal.journalTitle}
                    <DeleteBtn
                      deleteText="Delete"
                      onClick={() => deleteJournal(journal._id)}
                    />

                    <Modal
                      isOpen={modalIsOpen}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                      key={journal._id}
                    >
                      <button onClick={closeModal}>Close</button>
                      <h1 style={{ color: "black" }}>{modalTitle}</h1>
                      {modalEntry}
                    </Modal>
                  </ListItem>
                </Button>
              ))}
            </List>
          ) : (
            <h3>
              <br />
              You haven't made any journal entries yet... no time like the
              present!
            </h3>
          )}
        </Col>
        <Col size="md-1"></Col>
        <Col size="md-7">
          <br />
          <br />
          <form>
            <Input
              onChange={handleInputChange}
              name="journalTitle"
              placeholder="Enter a title for your entry"
              id="journalTitle"
            />
            <br />
            <TextArea
              onChange={handleInputChange}
              name="journal"
              placeholder="Time to reflect..."
              id="journalSubmit"
            />
            <br />
            <FormBtn disabled={!formObject.journal} onClick={handleFormSubmit}>
              Submit
            </FormBtn>
            <br />
            <br />
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Journals;
