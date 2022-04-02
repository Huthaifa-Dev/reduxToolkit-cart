import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';

import classes from './CartButton.module.css';

const CartButton = () => {

  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart.totalQuantity);
  const cartToggleHandler = (event) => {
    event.preventDefault();
    dispatch(uiActions.toggleCart());

  }

  return (
    <button className={classes.button} onClick={cartToggleHandler} >
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
