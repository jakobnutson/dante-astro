export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    image?: Image;

    
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Farhat Aghayev',
    subtitle: '',
    description: 'Description',
    image: {
        src: '/dante-astro/FT.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/dante-astro'
        },
        {
            text: 'Projects',
            href: '/dante-astro/projects'
        },
        {
            text: 'Blog',
            href: '/dante-astro/blog'
        },
        {
            text: 'Tags',
            href: '/dante-astro/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/dante-astro/about'
        },
        {
            text: 'Contact',
            href: '/dante-astro/contact'
        },
        {
            text: 'Terms',
            href: '/dante-astro/terms'
        },
        // {
        //     text: 'Download theme',
        //     href: 'https://github.com/JustGoodUI/dante-astro-theme'
        // }
    ],
    socialLinks: [
        {   
           
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/farhat-aghayev/'
            },
        
        
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm Farhat Aghayev GRC Practitioner, ITIL 4 Managing Professional, Prince2, MCSEI'm a self-motivated, smart working, and career-oriented IT professional with more than 10 years experience, specializing in IT Service Management, GRC and Microsoft platforms with an interest in IT Management and GRC directions. ",
        image: {
            src: '/dante-astro/FT.jpg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/dante-astro/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Blogs Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
