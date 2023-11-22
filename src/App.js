import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import image from './image/desktop-wallpaper-italy-iphone-phone-italian-thumbnail.jpg';
import image2 from './image/gettyimages-1301579230-1024x1024.jpg';
import image3 from './image/b67184bc6caeb7419b17e84f4ac5c102.jpg';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Netflix</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Twiter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div className='header'>
      <Dropdown.Menu show>
      <Dropdown.Header>Where do you live ?</Dropdown.Header>
      <Dropdown.Item eventKey="2">Barcelone</Dropdown.Item>
      <Dropdown.Item eventKey="3">Italy</Dropdown.Item>
      <Dropdown.Item eventKey="4">turc</Dropdown.Item>
      <Dropdown.Item eventKey="5">France</Dropdown.Item>
    </Dropdown.Menu>
      </div>
      <div className='card'>
      <Card style={{ width: '18rem' }} border="success">
      <Card.Img  className='image' variant="top" src={image3} />
      <Card.Body>
        <Card.Title>Barcelone</Card.Title>
        <Card.Text>
        The city of Barcelona is the capital of Catalonia, without diminishing in any way the other historical, economic and artistic cities of Catalonia:
        </Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} border="secondary">
      <Card.Img  className='image' variant="top" src={image} />
      <Card.Body>
        <Card.Title>Italy</Card.Title>
        <Card.Text>
        Italy's ten largest cities are Rome, Milan, Naples, Turin, Palermo, Genoa, Bologna, Florence, Bari and Catania.t comprises the provincie of Bologna, Ferrara, Forlì, Modena, Parma
        </Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} border="danger">
      <Card.Img className='image' variant="top" src={image2} />
      <Card.Body>
        <Card.Title>France</Card.Title>
        <Card.Text>
        Paris is the capital and most populous city of France. With an official estimated population of 2,102,650 residents as of 1 January 2023 i
        </Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
      </div>

    </div>
  );
}

export default App;
