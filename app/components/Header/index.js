import React from 'react'
import Link from 'react-router/Link'
import Button from 'components/Button'
import Logo from 'components/Logo'
import Gear from 'components/Gear'
import Caret from 'components/Caret'
import css from './style.css'

const Header = ({ className }) => {
  return (
    <div className={`${css.root} ${className ? className : ''}`}>
      <Link className={css.logo} to="/">
        <Logo />
      </Link>
      <Button className={css.btn}>View Your Scholarship Page</Button>
      <Button className={css.btn}>How It Works</Button>
      <div className={css.settings}>
        <Gear />
        <Caret />
      </div>
    </div>
  )
}

export default Header
