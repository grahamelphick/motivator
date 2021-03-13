import React, { useState, useEffect } from "react";
import { List, ListItem } from "../List";
import "../../pages/pages.css";
import API from "../../utils/API";
import Button from "../Button";
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

function JournalList() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [modalEntry, setModalEntry] = useState();

  function openModal(journalTitle, journal) {
    setIsOpen(true);
    setModalTitle(journalTitle);
    setModalEntry(journal);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function displayEntry(journalTitle, journal) {
    openModal(journalTitle, journal);
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

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <a href="/journal">My Journal Entries</a>
      </h1>
      {journals.length ? (
        <List>
          {journals.map((journal) => (
            <div>
              <ListItem
                key={journal._id}
                onClick={() =>
                  displayEntry(journal.journalTitle, journal.journal)
                }
              >
                <Button
                  onClick={() =>
                    displayEntry(journal.journalTitle, journal.journal)
                  }
                  style={{ backgroundColor: "white", border: "none" }}
                >
                  {journal.journalTitle}
                </Button>
                <img
                  src="https://img.icons8.com/material-sharp/24/000000/delete-forever.png"
                  onClick={() => deleteJournal(journal._id)}
                  style={{ float: "right" }}
                ></img>
              </ListItem>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                key={journal._id}
              >
                <button onClick={closeModal}>Close</button>
                <h1 style={{ color: "black" }}>{modalTitle}</h1>
                {modalEntry}
              </Modal>
            </div>
          ))}
        </List>
      ) : (
        <h3>
          <br />
          You haven't made any journal entries yet... click{" "}
          <a href="/journal">
            <u>here</u>
          </a>{" "}
          to start reflecting!
        </h3>
      )}
    </div>
  );
}

export default JournalList;
