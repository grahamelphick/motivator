import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Col from "../Col";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import "./style.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function GoalsList() {
  const [goals, setGoals] = useState([]);
  const [confettiRun, setConfettiRun] = useState(false);

  useEffect(() => {
    loadGoals();
  }, []);

  function loadGoals() {
    API.getGoals()
      .then((res) => setGoals(res.data))
      .catch((err) => console.log(err));
  }

  function deleteGoal(id) {
    setConfettiRun(true);
    API.deleteGoal(id)
      .then((res) => loadGoals())
      .catch((err) => console.log(err));
  }

  const { width, height } = useWindowSize();

  return (
    <div>
      <Confetti
        width={width}
        height={height}
        run={confettiRun}
        numberOfPieces={2000}
        recycle={false}
      />
      <h1 style={{ textAlign: "center" }}>
        <a href="/goals">My Goals</a>
      </h1>
      {goals.length ? (
        <List>
          {goals.map((goal) => (
            <ListItem key={goal._id}>
              {goal.goal}
              <DeleteBtn
                deleteText="I did it!"
                onClick={() => deleteGoal(goal._id)}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>
          {" "}
          <br />
          No goals yet... Click{" "}
          <a href="/goals">
            <u>here</u>
          </a>{" "}
          to get started!
        </h3>
      )}
    </div>
  );
}

export default GoalsList;
