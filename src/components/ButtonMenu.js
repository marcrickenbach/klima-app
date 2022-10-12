import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

const ButtonMenu = () => {
  return (
    <>
    <Button variant='text' className='trackBtn mt-4'>track</Button><br/>
    <Button variant='text' className='randomBtn mt-3'>random</Button><br/>
    <Button variant='text' className='aboutBtn mt-3'>about</Button><br/><br/><br/>
    <FontAwesomeIcon className='refreshIcon' icon={faRefresh}></FontAwesomeIcon>
    </>
  )
}

export default ButtonMenu;