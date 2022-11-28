import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rs Samarth </span>
            from <span className="purple"> Banglore, India.</span>
            <br />I am a junior web developer working in one of the start up 
            company
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stop thinking , start doing!"{" "}
          </p>
          <footer className="blockquote-footer">Samarth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
