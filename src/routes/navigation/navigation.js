import { UserContext } from "../../contexts/user-context";
import { CartContext } from "../../contexts/cart-context";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import  {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation-style";


import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { useContext } from "react";
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { cartDropdownOpen } = useContext(CartContext);


    return (
        <>
            <NavigationContainer>
                <div><LogoContainer to='/'><CrownLogo /></LogoContainer></div>
                <NavLinks>
                    <NavLink to='/shop'>Shop</NavLink>
                    {currentUser ? <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink> : <NavLink to='/auth'>Sign In</NavLink>}
                    <CartIcon />
                </NavLinks>
                {cartDropdownOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
}

export default Navigation;