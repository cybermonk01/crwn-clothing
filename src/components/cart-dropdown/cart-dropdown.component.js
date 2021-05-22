import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => {
  return  <div className='cart-dropdown'>
        <div className='cart-items' />

        <CustomButton> Go to checkOut </CustomButton>
    </div>
}

export default CartDropdown;