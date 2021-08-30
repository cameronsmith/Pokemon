import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Body from './Body';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Body />
    </Container>
  );
};

export default App;
