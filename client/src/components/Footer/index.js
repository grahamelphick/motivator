import React from "react";
import { Card, Button } from "react-bootstrap";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

function Footer() {
  return (
    <Card
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        height: 60,
      }}
    >
      <Card.Header>
        <a href="https://grahamelphick.github.io/react-portfolio/"
          style={{
            alignItems: "left",
            fontSize: 14,
            color: "black",
            margin: 1,
            float: "left",
          }}
        >
          Copyright Graham Elphick 2021
        </a>
        <p style={{ fontSize: 14, margin: 1, float: "right" }}>
          <a
            style={{ color: "black" }}
            href="https://icons8.com/icon/84386/delete-bin"
            target="_blank"
          >
            Delete Bin icon by Icons8
          </a>
        </p>
        <br />
        <p style={{ fontSize: 14, margin: 1, float: "right" }}>
          <a
            style={{ color: "black" }}
            href="https://unsplash.com/photos/eA2t5EvcxU4"
          >
            Background photo by Xan Griffin on Unsplash
          </a>
        </p>
      </Card.Header>
    </Card>
  );
}

export default Footer;
