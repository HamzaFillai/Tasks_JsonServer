import React from 'react'
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="navbar">
            <h1><span>Acme</span> Web Designer</h1>
            <nav>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="service"><a>Service</a></Link></li>
                </ul>
            </nav>
        </div>
    )
}
