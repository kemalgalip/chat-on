import React from "react"

export default function Header(props) {
    return (
        <header ref={props.headerRef}>
            <h2>ChatON</h2>
            <nav>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#FAQs">FAQ</a>
            </nav>
        </header>
    )
}