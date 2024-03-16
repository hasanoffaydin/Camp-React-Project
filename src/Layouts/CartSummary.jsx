import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { DropdownDivider, DropdownItem, DropdownMenu, Dropdown, Label } from 'semantic-ui-react'

export default function CartSummary() {

  const { cartItems } = useSelector(state => state.cart)
  return (
    <div>
      <Dropdown item text='Sepetiniz'>
        <DropdownMenu>
          {
            cartItems.map((cartItems) => (
              <DropdownItem> {cartItems.product.productName} <Label> {cartItems.quantity} </Label></DropdownItem>
            ))
          }
          <DropdownDivider></DropdownDivider>
          <DropdownItem as={NavLink} to="/cart"> Sebete Get </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
