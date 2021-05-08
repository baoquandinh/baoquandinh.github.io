import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Fragment } from 'react'
import { Link } from 'react-router-dom'


export const PortfolioNavbar = () => {
    return <Fragment>
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="portfolio-responsive-navbar" />
                <Navbar.Collapse className="mr-auto" id="portfolio-responsive-navbar">
                    <Nav className="nav-fill w-100">
                        <Nav.Link as={Link} to="/">About Me</Nav.Link>
                        <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Fragment>
}