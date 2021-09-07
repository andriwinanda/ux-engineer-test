import React from 'react'
import HeaderContainer from '../../atoms/container/header-container'
import logo from '../../../assets/images/itemku-logo.png'

const Header = () => {
  return (
    <div>
    <HeaderContainer shadow={true}>
      <img src={logo} className="h-9" alt="logo" />
    </HeaderContainer>
    </div>
  )
}

export default Header
