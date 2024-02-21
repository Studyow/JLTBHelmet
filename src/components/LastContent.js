
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogImage from '../assets/banners/bottomBanner.jpg'
import smBanner from '../assets/pocket.PNG'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { blogsArray } from '../blogs';

function LastContent() {


    return (
        <>
            <div className='my-5'>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <div className='blog-header'>
                        <h4>Blog & Events</h4>
                        <Button variant='' href='/blogs'> View All</Button>
                    </div>
                    {blogsArray.map((blog, id) => (
                    <Card className='my-2'>
                        <Card.Body>
                            <div className='blogie'>
                                <img src={blog.img} width='100px' className='me-3'/>
                                <div className='blog-content'>
                                    <span>{blog.title}</span>
                                    <span>{blog.des}</span>
                                    <div>
                                    <Button variant='' className='text-danger'>view</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    ))}
                </Col>
                
                <Col xs lg="6">
                    <div className='my-5'>
                        
                        <div>
                            <Row>
                                <Col> </Col>

                                <Col>
                                    <div className='bottomContext text-light'>
                                        <h2>AGV</h2>
                                        <h2>BEST</h2>
                                        <h2>SELLERS</h2>
                                        <p>Lorem ipsum dolor sit amet</p>
                                        <Button href='/store' variant='danger'>SHOP NOW</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <img src={BlogImage} width='100%' />
                        
                    </div>
                </Col>
            </Row>
            </div>
        </>
    )
}

export default LastContent;