import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
export default function SignOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={signIn}> Giris Yap </Button>
                <Button primary style={{marginLeft : '10px'}}> Kayit Ol </Button>
            </Menu.Item>
        </div>
    )
}
