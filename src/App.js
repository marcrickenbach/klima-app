import './App.css';
import { Container, Col, Row } from 'reactstrap';
import WeatherPanel from './components/WeatherPanel';
import LeftPanel from './components/LeftPanel';
import WeatherPanelList from './components/WeatherPanelList';


function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <Container className='appContainer'>
      <Row>
        <Col sm='4' className='mt-5'>
          <LeftPanel />
          {/* <Search onSearchChange={handleOnSearchChange} /> */}
        </Col>
        <Col sm='8' className='mt-5'>
          <WeatherPanelList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
