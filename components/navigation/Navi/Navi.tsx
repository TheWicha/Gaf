import React from 'react'
import NavigationElement from '../NavigationElement/NavigationElement';
import styles from './Navi.module.scss'

const Navi = () => {
    return(
        <div className={styles.container}>
          <NavigationElement href='/home' text='Home'/>
          <NavigationElement href='/about-us' text='About Us'/>
          <NavigationElement href='/contact' text="Contact" />
        </div>
    )
}

export default Navi;