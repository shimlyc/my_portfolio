import {Col,Row,Container} from "react-bootstrap"
import "./Footer.css"

function Footer(){
    return(
        <>
        <Container>
            <Row >
              <Col>
              <div id="footer">
          
          <p className="para1">visit linkedin & github for more projects...</p>
          <div class="social-links">
        <a href=" https://github.com/shimlyc?tab=repositories   "><i class="fa-brands fa-github"></i></a>   
        <a href="https://www.linkedin.com/in/shimly-c-b49029276/  "><i class="fa-brands fa-linkedin"></i></a>   
          </div>
          
        </div>

         
              </Col>

            </Row>
        </Container>
        
        
        
        </>
    )
}
export default Footer