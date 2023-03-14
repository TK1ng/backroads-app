import React from 'react'
import PageLinks from './PageLinks';
import { pageLinks, socialLinks } from '../data';
import logo from '../images/logo.svg';

export const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <ul className="nav-links" id="nav-links">
                    {pageLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.href} className="nav-link">{link.title}</a>
                            </li>
                        )
                    })}
                </ul> */}
                <PageLinks ulClass="nav-links" liClass="nav-link" />
                <ul className="nav-icons">
                    {socialLinks.map((link) => {
                        const { id, href, className } = link;
                        return (
                            <li key={id}>
                                <a
                                    href={href}
                                    className="nav-icon"
                                    target="_blank"
                                    rel="noreferrer">
                                    <i className={className}></i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
