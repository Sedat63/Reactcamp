import React from 'react'
import { Dropdown, Menu, Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://www.mmsrn.com/wp-content/uploads/2018/10/pokemon-1-balbazar.png" />
            <Dropdown pointing="top left" text='Sedat'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
