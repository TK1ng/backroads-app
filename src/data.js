import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    { id: 1, href: '#home', title: 'Home' },
    { id: 2, href: '#about', title: 'About' },
    { id: 3, href: '#services', title: 'Services' },
    { id: 4, href: '#tours', title: 'Tours' },
]

export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', className: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', className: 'fab fa-twitter' },
    { id: 3, href: 'https://www.twitter.com', className: 'fab fa-squarespace' }
]

export const services = [
    {
        id: 1, title: 'saving money', className: 'fas fa-wallet fa-fw', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id: 2, title: 'endless hiking', className: 'fas fa-tree fa-fw', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id: 3, title: 'amazing comfort', className: 'fas fa-socks fa-fw', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
]

export const tours = [
    {
        id: 1,
        image: tour1,
        title: 'Tibet Adventure',
        date: 'august 26th, 2020',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'china',
        duration: 6,
        cost: 'from $2100'

    },
    {
        id: 2,
        image: tour2,
        title: 'best of java',
        date: 'october 1th, 2020',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'indonesia',
        duration: 11,
        cost: 'from $1400'

    },
    {
        id: 3,
        image: tour3,
        title: 'explore hong kong',
        date: 'september 15th, 2020',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'hong kong',
        duration: 8,
        cost: 'from $5000'

    },
    {
        id: 4,
        image: tour4,
        title: 'kenya highlights',
        date: 'december 5th, 2019<',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'kenya',
        duration: 20,
        cost: 'from $3300'

    },
]