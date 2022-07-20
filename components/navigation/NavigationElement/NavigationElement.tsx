import React from 'react'
import Link from 'next/link';
import styles from './NavigationElement.module.scss'


interface PropsType {
    text: string;
    href: string;
    onClick?: () => void
}

const NavigationElement = ({href = '/', text, onClick}: PropsType) => {
    return (
        <Link href={href}>
            <a onClick={onClick} className={styles.link}>{text}</a>
        </Link>
    )
}

export default NavigationElement;