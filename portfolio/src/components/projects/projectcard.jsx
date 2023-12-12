import { Col } from "react-bootstrap";
import "./project.css"

function  ProjectCard ({ title, description, imgUrl }) {
  return (
    <Col size={12} sm={6} md={4}>
      
      <div className="proj-imgbx">
        <img src={imgUrl} className="ok" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
export default ProjectCard