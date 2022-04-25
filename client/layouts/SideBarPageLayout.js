import React from 'react'
import PageLayout from './PageLayout'
import styles from "../styles/Layout.module.scss"
import SideBar from '../components/SideBar'

const SideBarPageLayout = ({children}) => {
  return (
    <div className={styles["sidebar-layout"]} >
        <SideBar></SideBar>
        {children}
    </div>
  )
}

export default SideBarPageLayout