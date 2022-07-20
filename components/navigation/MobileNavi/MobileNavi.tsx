import React from 'react'
import NavigationElement from '../NavigationElement/NavigationElement';
import styles from './MobileNavi.module.scss'
import cx from 'classnames'

const MobileNavi = ({ isOpened, onClick }) => {


    return (
        <>
            <button onClick={onClick} className={cx({
                [styles.hidden]: !isOpened
            })}>Burger tutaj</button>
            <button className={cx({
                [styles.hidden]: isOpened
            })}
                onClick={onClick}>X</button>
            <div className={cx(styles.navi, {
                [styles.hidden]: isOpened,
            })}>
                <NavigationElement onClick={onClick} href='/home' text='Home' />
                <NavigationElement onClick={onClick} href='/about-us' text='About Us' />
                <NavigationElement onClick={onClick} href='/contact' text='Contact' />
            </div>
        </>

    )
}

export default MobileNavi