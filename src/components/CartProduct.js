import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";
import Badge from 'react-bootstrap/Badge';

// icons
import { FaMinus } from "react-icons/fa";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
      <><hr></hr>
        <h3>{productData.title}</h3>
        <div className="d-flex justify-content-around align-items-center">
          <span>{quantity} total</span>
          <span>{(quantity * productData.price).toFixed(2)}php</span>
          <Button
            size="sm"
            variant="link"
            onClick={() => cart.deleteFromCart(id)}
          >
            <Badge pill bg="danger" className='p-3'>  
                <FaMinus/>
            </Badge>
            
          </Button>
        </div>
        
      </>
    );
}

export default CartProduct;