import React from 'react'
import Header from 'components/Header'
import SidePanel from 'components/SidePanel'
import Banner from './Banner'
import Stats from './Stats'
import Profiles from './Profiles'
import css from './style.css'

const ScholarshipFoundation = props => {
  return (
    <div>
      <Header />
      <SidePanel />
      <div className={css.root}>
        <Banner />
        <Stats />
        <Profiles />
      </div>
    </div>
  )
}

export default ScholarshipFoundation