const PageLink = ({ href, title, liClass }) => {
    return (
        <li>
            <a href={href} className={liClass}>{title}</a>
        </li>
    );
}

export default PageLink;