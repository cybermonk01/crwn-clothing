import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import {auth } from '../../firebase/firebase.utils';
import  {connect} from 'react-redux';
import CartIcon from '../cart/cart.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser ,hidden}) => (
    <div className = "header">
        <Link className = 'logo-conatiner' to='/'>
            <Logo className = 'logo' />
            </Link>
            <div className = 'options'>
                <Link className = 'option' to='/shop'>
                    SHOP</Link>
                    
                <Link className = 'option' to='/shop'>
                    CONTACT</Link>
                    {
                    currentUser ? 
                    (
                    <div className='option' onclick ={() => auth.signOut()}> Sign OUT </div>):( <Link className="option" to='/signin'>Sign In</Link>)
                    }
        <CartIcon />
        </div>
        {hidden?null:<CartDropdown />}
                    </div>
);

const mapStateToProps = ({user:{currentUser},cart: {hidden }}) =>({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);