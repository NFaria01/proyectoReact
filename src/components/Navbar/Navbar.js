import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget';



const Navegador = () => {
    return(
      <nav>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="">HOME</Navbar.Brand>
            <Nav className="me-auto">
                <Button variant='outline-secondary' paddingRight='20px' marginLeft='auto' label='CATEGORIA 1'/>
                <Button variant='secondary' marginLeft='auto' label='CATEGORIA 2'/>
                <Button variant='success' marginLeft='auto' label='CATEGORIA 3'/>
            </Nav>
          
            <CartWidget  marginLeft='auto' width='5%' />
            </Container>
        </Navbar>
      </nav>
    )
}
export default Navegador 