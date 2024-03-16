import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignIn({signOut}) 
{
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced ="right" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"></Image>
            <Dropdown pointing="top left" text="Aydin"> 
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item text="Cixis Yap" icon="sign-out" onClick={signOut}/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
