import React from 'react'

export default function Bloco(props) {
    return (
        <div className="bloco-container">
            {props.children}
        </div>
    )
}