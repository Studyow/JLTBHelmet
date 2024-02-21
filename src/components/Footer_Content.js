import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduct from './CartProduct';

import { Cart4 } from 'react-bootstrap-icons';
import { FaTshirt } from "react-icons/fa";

import { BsHouseFill } from "react-icons/bs";
// Boots
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

import PrLogo from '../assets/Prope_Helmet.png';
import Dropdown from 'react-bootstrap/Dropdown';


function Footer_Content() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">
                    <Image src={PrLogo} height={70} />
                </Navbar.Brand>

                <Stack direction="horizontal" gap={3}>
                    <div className="p-2">
                        <Button variant="" href="/" className='flex-a-icon'>
                            <BsHouseFill className='m-2'/>
                            <span> Home </span>
                        </Button>
                    </div>
                    <div className='p-2'>
                        <Button variant="" href="/blogs" className='flex-a-icon'>
                            <span> Blog </span>
                        </Button>
                    </div>
                    <div className='p-2'>
                        <Button variant="" href="/" className='flex-a-icon'>
                            <span> Contact </span>
                        </Button>
                    </div>
                   
                </Stack>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <div className="p-2">
                        <Button variant="" href="/store" className='flex-a-icon'>
                            <FaTshirt className='m-2'/>
                            <span> Store </span>
                        </Button>{' '}
                    </div>
                    <Button className='' variant="secondary" onClick={handleShow}><span><Cart4 /></span> {productsCount}</Button>
                    
                </Navbar.Collapse>
            </Navbar>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}
                            <hr></hr>
                            <h1 className='text-success'>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            
                            <div className='p-5 d-flex justify-content-center'>
                                {/* <h3>Payment method</h3> */}
                                <Button variant="success" className='btn-dark btn btn-lg' onClick={checkout}>
                                    Pay Now
                                </Button>
                            </div>
                        </>
                    :
                        <div>
                            <h4>There are no items in your cart!</h4>
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Footer_Content;