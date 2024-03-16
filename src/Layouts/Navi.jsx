import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    DropdownMenu,
    MenuMenu,
    MenuItem,
    Menu,
    Container,
} from 'semantic-ui-react'
import SignOut from './SignOut'
import SignIn from './SignIn'
import CartSummary from './CartSummary'
export default function Navi() {
    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated,setisAuthenticated] = useState(true)
    const handleSignOut = () => {
        setisAuthenticated(false)
        // history.push("/")
    }
    const handleEnter = () => {
        setisAuthenticated(true)
    } 
    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <MenuItem name='home' />
                    <MenuItem name='messages' />
                    <MenuMenu position='right'>
                                <DropdownMenu>{cartItems.length>0&&<CartSummary/>}</DropdownMenu>
                        {
                            isAuthenticated ? <SignIn signOut={handleSignOut}/> : <SignOut signIn={handleEnter}/>
                        }
                    </MenuMenu>
                </Container>
            </Menu>
        </div>
    )
}
