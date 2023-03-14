const SocialLinks = ({ href, className }) => {
    return (
        <li>
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
            ><i className={className}></i></a>
        </li>
    );
}

export default SocialLinks;