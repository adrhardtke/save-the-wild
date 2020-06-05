import React from 'react'
import { Link } from 'react-router-dom'
import './ComponentStyles.css';


export default function Menu(props) {
    const item_ativo = props.active ? props.active - 1 : null
    const menu = [
        {
            title: 'Home',
            to: '/',
            actived: 0
        },
        {
            title: 'Join us',
            to: '/join',
            actived: 0
        },
        {
            title: 'About',
            to: '/about',
            actived: 0
        }
    ]

    return (
        <nav className="menu-container">
            <ul>
                {menu.map((item, index) => (
                    <li>
                        <Link to={item.to} className={index === item_ativo ? 'selected' : null}>{item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav >
    )
}