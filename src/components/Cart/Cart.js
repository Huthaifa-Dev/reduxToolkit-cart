import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {

  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems);
  const cartContent = <Fragment>
    {

      cartItems.map(item =>
        <CartItem
          item={item} key={item.id}
        />
      )}
  </Fragment>;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartContent}
      </ul>
    </Card>
  );
};

export default Cart;
