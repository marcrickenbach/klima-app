import { Container, Row, Col } from 'reactstrap';
import Search from './Search';
import ButtonMenu from './ButtonMenu';
import ColorSelect from './ColorSelect';

const LeftPanel = () => {
    return (
        <Container>
            <h1>KLIMA</h1>
            <Search />
            <ButtonMenu />
            <ColorSelect/>
        </Container>
    )
}

export default LeftPanel