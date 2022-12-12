import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <ul className="py-5 w-100 list-unstyled footer_item align-items-center flex-wrap justify-content-between">
                <li><Link>ALL PRODUCTS</Link></li>
                <li><Link>ABOUT SEEDRA</Link></li>
                <li><Link>OUR BLOG</Link></li>
                <li><Link to={'/'}><img src="./assets/images/logo.svg" alt="" /></Link></li>
                <li> <Link>Terms&Conditions</Link></li>
                <li><Link>Privacy Policy</Link></li>
            </ul>
        </div>
    )
}

export default Footer