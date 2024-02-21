import {Row, Col, Button} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
import Alert from 'react-bootstrap/Alert';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// [{... }, {... }, {... }]
function Store() {

    return (
        <>
            <div>
                <Row>
                    {/* <Col xs lg="2" className='col-xs-12'></Col> */}
                    <Col className='col-xs-12'>
                    {/* <h1 align="center" className="p-3">Propel Helmet</h1> */}
                    </Col>
                    
                    <Col xs lg="5" className='col-xs-12'>
                        <Alert key='dark' variant='dark' className='alert-pak'>
                            UP TO 20% OFF SELECT HELMETS
                            <Button variant="danger">SHOP NOW</Button>
                        </Alert>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col className='col-md-3'>
                    <div className='categoryBound'>
                        <h4 className='catText'>CATEGORY</h4>
                        <ButtonGroup vertical className='my-4'>
                            <Button variant="outline-secondary" className='p-3'>DIRT</Button>
                            <Button variant="outline-secondary" className='p-3'>STREET</Button>
                            <Button variant="outline-secondary" className='p-3'>ADVENTURE</Button>
                        </ButtonGroup>
                    </div>
                </Col>

                <Col className='col-md-9'>
                    {/* product card */}
                    <Row xs={1} md={3} className="g-4">
                    {productsArray.map((product, idx) => (
                        <Col align="center" key={idx}>
                            <ProductCard product={product}/>
                        </Col>
                    ))}
                    </Row>
                </Col>
            </Row>
            


        </>
    )
}

export default Store;