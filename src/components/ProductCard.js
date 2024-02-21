import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

// React-icons
import { FaCoins } from "react-icons/fa";
import PhpIcon from "../assets/icons/peso-coin.svg"
// Bootstrap-react-Icons
import { NodeMinus } from 'react-bootstrap-icons';
import { NodePlus } from 'react-bootstrap-icons';
import { CartXFill } from 'react-bootstrap-icons';


import building1 from '../assets/building1.PNG';
import market from '../assets/pocket0.PNG'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


// var request = require('request');
// var options = {
//   'method': 'POST',
//   'url': 'https://g.payx.ph/payment_request',
//   'headers': {
//   },
//   formData: {
//     'x-public-key': 'pk_13cddbbdcf0fe15a22e8fd757cf9fe69',
//     'amount': '100',
//     'description': 'Payment for services rendered'
//   }
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    const placeholderImage =
    'https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
    
    const onImageError = (e) => {
        e.target.src = placeholderImage
      }

    return (
      <Card>
        <Card.Body className="">
          <div className="styles justify-content-center d-flex align-items-center flex-column">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {/* <img src={PhpIcon} width={'35px'}/> */}
              <div className="d-flex justify-content-center align-items-center">
                <FaCoins className='mx-2'/>
                <span className='p-1'>{product.price}</span>
                <span className='p-1'>php</span>
              </div>
            </Card.Text>
            <img
              src={product.img}
              width="100%"
              height="auto"
              className="m-4"
              alt=""
            />
            <div>
              <p>{product.des}</p>
            </div>
            <div 
              // className="plus-my-icon"
              >
              {productQuantity > 0 ? (
                <>
                  <Form as={Row} className="">
                    <Col sm="12">
                      <Form.Label column="true" sm="6">
                        <span>In Cart: </span>
                        <span>{productQuantity} </span>
                      </Form.Label>
                    </Col>
                    <Col sm="12" className="">
                      {/* <div className='d-flex'>
                                            <a href="desc">Description:</a>
                                        </div> */}
                      <div className="d-flex justify-content-around">
                        <Button
                          sm="6"
                          onClick={() => cart.addOneToCart(product.id)}
                          className="btn-dark"
                        >
                          <FaPlus className="conMinus" />
                        </Button>
                        <Button
                          sm="6"
                          onClick={() => cart.removeOneFromCart(product.id)}
                          className="btn-dark"
                        >
                          <FaMinus />
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => cart.deleteFromCart(product.id)}
                          className=""
                        >
                          Remove
                        </Button>
                      </div>
                    </Col>
                  </Form>
                </>
              ) : (
                <Button
                  variant="outline-secondary"
                  className="p-1 d-flex justify-content-center align-items-center"
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  <FaPlus className='m-1' /> <span className='m-1'>Buy Now</span>
                </Button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    );
}

export default ProductCard;