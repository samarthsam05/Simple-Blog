import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import  book from "../../Assets/Projects/book.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="web store book application"
              description="We used this website to order books online in pdf format , any one can add the book and download. "
              ghLink="https://github.com/samarthsam05/BookStore-webapplication1"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Leave managment System"
              description="It is used for a employee  to take leave permission through this website , here admin has a seperate role employee has a seperate role."
            ghLink="https://github.com/samarthsam05/leave-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Authentication and Autherization"
              description=" Simple authentication and autherization example using react js, here i used identity core concept and AuthO for differnt users.
              "
              ghLink="https://github.com/samarthsam05/Identitycore"Online
                          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
