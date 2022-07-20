import React from 'react'
import NavigationElement from '../NavigationElement/NavigationElement';
import styles from './HomeNavi.module.scss'
const HomeNavi = () => {
    return (
        <div className={styles.container}>
            <NavigationElement href='/home' text='Home' />
            <NavigationElement href='/about-us' text='About Us' />
            <NavigationElement href='/contact' text="Contact" />
        </div>
    )
}

export default HomeNavi;