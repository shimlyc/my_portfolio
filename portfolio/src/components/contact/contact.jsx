import { Row, Col, Container } from "react-bootstrap";
import "./contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z5pl8ps', 'template_5nbe0oi', form.current, 'eaQD40Em8WfSphYJV')
            .then((result) => {
                console.log(result.text);
                e.target.reset(); // Move this line here
            }, (error) => {
                console.log(error.text);
            });
    };

    const form = useRef();

    return (
        <>
            <section className="contact" id="contact">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <h2>Get in touch</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <Row>
                                    <Col md={6} className="px-1">
                                        <input type="text" placeholder="First name" name="user_name" />
                                    </Col>
                                    <Col md={6} className="px-1">
                                        <input type="text" placeholder="Last name" />
                                    </Col>
                                    <Col md={6} className="px-1">
                                        <input type="email" placeholder="Email address" name="user_email" />
                                    </Col>
                                    <Col md={6} className="px-1">
                                        <input type="number" placeholder="Phone no" />
                                    </Col>
                                    <Col md={6} className="px-1">
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                        <button type="submit">Submit</button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                    
                </Container>
                
            </section>
            
        </>
    );
}

export default Contact;