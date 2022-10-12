import { Col, Row } from 'reactstrap';
import WeatherPanel from './WeatherPanel';
import { showAllCities } from '../cities/citiesSlice';


const WeatherPanelList = () => {
  const cities = showAllCities();

  return (
    <Row>
      {cities.map((city) => {
        return (
          <Col
            md='5'
            className='m-4'
            key={city.id}
          >
            <WeatherPanel cityWeather={city} />
          </Col>
        );
      })}
    </Row>

  )
}

export default WeatherPanelList