import React, { Component } from 'react'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import { routes, links } from './routes'
import css from './style.css'

export const App = props => {
  return (
    <Router>
      <div className={css.root}>
        <Match
          exactly
          pattern="/"
          render={props =>
            <div className={css.pages}>
              <div className={css.header}>Pages</div>
              {links.map((x, i) =>
                <Link key={i} className={css.link} to={x.to}>{x.text}</Link>
              )}
            </div>
          } />
          {routes.map((x, i) => <Match key={i} {...x} />)}
      </div>
    </Router>
  )
}

export default App