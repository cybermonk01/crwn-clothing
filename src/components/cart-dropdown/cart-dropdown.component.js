import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';


const CartDropdown = ({ cartItems, history,dispatch }) => {

  return  <div className='cart-dropdown'>
    <div className='cart-items' >
      {
        cartItems.length ?(
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)) : (
            <span className='empty-message'> Your Cart is empty</span>
         )}

        </div>

    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}
    >
      Go to checkOut </CustomButton>
    </div>
}


const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
  
});

export default withRouter(connect(mapStateToProps)(CartDropdown));