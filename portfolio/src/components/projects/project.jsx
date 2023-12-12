import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./projectcard";
import TrackVisibility from 'react-on-screen';
import "./project.css"



function Projects  ()  {
  const user="false"

  const projects = [
    {
      title: "Shopping site",
      description: "shopping site using filter in react",
      imgUrl: "./images/Screenshot (45).png",
    },
    {
      title: "Netflix",
      description: "using HTML & CSS",
      imgUrl: "./images/Screenshot (47).png",
      
    },
    {
      title: "website",
      description: " using html,css,bootstrap",
      imgUrl: "./images/Screenshot (48).png",
    },
    {
      title: "Fanta website",
      description: "using HTML ,CSS & Javascript",
      imgUrl: "./images/Screenshot (49).png",
    },
    {
      title: "Responsive travel website",
      description: "Build using  html,css,bootstrap",
      imgUrl: "./images/Screenshot (50).png",
    },
    {
      title: "shopping site",
      description: "adding to cart using react",
      imgUrl: "./images/Screenshot (53).png",
    },
  ];
  const projects1 = [
    {
      title: "GSAP draggable ",
      description: "website using HTML,CSS and Javascript",
      imgUrl: "./images/Screenshot (51).png",
    },
    {
      title: "Cart",
      description: "making cart using map",
      imgUrl: "./images/Screenshot (52).png",
      
    },
    {
      title: "Cart",
      description: "using API ",
      imgUrl: "./images/Screenshot (54).png",
      
    },
  ]
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
           <div>
                <h2 className="pr">Projects</h2>
                <p> I will gain hands-on experience working with HTML, CSS, JavaScript, and React.js to create a functional and engaging web application. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" >Tab 2</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                    {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                  </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
           
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src=""></img>
    </section>
  )
}
export default Projects