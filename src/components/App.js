import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
};

export default App;
