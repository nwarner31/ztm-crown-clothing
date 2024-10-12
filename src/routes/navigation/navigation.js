import { UserContext } from "../../contexts/user-context";
import { CartContext } from "../../contexts/cart-context";
import './navigation.scss';
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";



import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { useContext } from "react";
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { cartDropdownOpen } = useContext(CartContext);


    return (
        <>
            <div className='navigation'>
                <div><Link className='logo-container' to='/'><CrownLogo /></Link></div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>Shop</Link>
                    {currentUser ? <span className='nav-link' onClick={signOutUser}>Sign Out</span> : <Link className='nav-link' to='/auth'>Sign In</Link>}
                    <CartIcon />
                </div>
                {cartDropdownOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;