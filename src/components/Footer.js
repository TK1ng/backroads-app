import React from 'react'
import PageLinks from './PageLinks';
import SocialLink from './SocialLinks'
import { socialLinks } from '../data'

export const Footer = () => {
    return (
        <footer className="section footer">
            {/* <ul className="footer-links">
                {pageLinks.map((link) => {
                    const { id, href, text } = link;
                    return (
                        <li key={id}>
                            <a href={href} className="footer-link">{text}</a>
                        </li>
                    )
                })}
            </ul> */}
            <PageLinks ulClass="footer-links" liClass="footer-link" />
            <ul className="footer-icons">
                {socialLinks.map((link) => {
                    return (
                        <SocialLink key={link.id} {...link} />
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}
