import PageLink from './PageLink';
import { pageLinks } from '../data';

const PageLinks = ({ ulClass, liClass }) => {
    return (
        <ul className={ulClass} id="nav-links">
            {pageLinks.map((link) => {
                return (
                    <PageLink key={link.id} {...link} liClass={liClass} />
                )
            })}
        </ul>
    );
}

export default PageLinks;