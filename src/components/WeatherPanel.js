import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faDroplet, faMountainSun } from '@fortawesome/free-solid-svg-icons';

const WeatherPanel = ({ cityWeather }) => {
  const { id, city, country, temperature, humidity, pressure, altitude } = cityWeather;
  return (
    <Card className="weatherPanel bg-dark">
      <CardBody>
        <Button className='xBtn btn-dark'>x</Button>
        <CardTitle className='cityTitle mt-2'>{city},{country}</CardTitle>
        <table className='infoTable'>
          <tr>
            <td>
              <FontAwesomeIcon icon={faTemperatureHalf}></FontAwesomeIcon>
            </td>
            <td>
              <CardText>{temperature}</CardText>
            </td>
            <td></td>
            <td></td>
            <td>
              <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon>
            </td>
            <td>
              <CardText>{humidity}</CardText>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon>
            </td>
            <td>
              <CardText>{pressure}</CardText>
            </td>
            <td></td>
            <td></td>
            <td>
              <FontAwesomeIcon icon={faMountainSun}></FontAwesomeIcon>
            </td>
            <td>
              <CardText>{altitude}</CardText>
            </td>
            <td></td>
          </tr>
        </table>

      </CardBody>

    </Card >
  )
}

export default WeatherPanel