import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { blogsArray } from '../blogs';

function BlogCards(props) { // props.product is the product we are selling
    const product = props.product;


    return (
        <div className='my-5'>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    <div className='blog-header'>
                        <h4>Blog & Events</h4>
                    </div>
                    {blogsArray.map((blog, id) => (
                    <Card className='my-3'>
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
            </Row>
            </div>
    );
}

export default BlogCards;