const config = {
    analytics: {
        googleAnalyticsID: 'G-GY1N6940ED',
    },
    theme: {
        width: '900pt',
        defaultTheme: 'dark',
    },
    meta: {
        title: 'Accretence',
        description: "Amirhossein Mohammadi's Personal Website & Portfolio! 👨‍💻",
        url: 'https://accretence.com',
        image: 'https://i.imgur.com/hNovO0U.png',
        handle: '@accretence',
        keywords: 'portfolio, accretence',
    },
    tabs: [
        {
            label: 'EXPERIENCES',
            value: '/experiences',
        },
        {
            label: 'CONTACT',
            value: '/contact',
        },
    ],
    links: {
        email: 'mailto:accretence@gmail.com',
        twitter: 'https://twitter.com/accretence',
        linkedin: 'https://linkedin.com/in/accretence',
        github: 'https://github.com/accretence',
        instagram: 'https://instagram.com/accretence',
        pinterest: 'https://pinterest.com/accretence',
    },
    experiences: [
        {
            title: 'Learning and Development Specialist',
            employer: 'Danak Group, Tehran',
            period: 'Jan 2018 – Jun 2018',
            skills: ['Facilitation', 'Writing Practical Documentations'],
            description:
                'In a 6 months L&D program,  I created written documents and small videos that helped transition a traditional design firm using outdated CAD software to a more contemporary operational pipeline using modern BIM software which resulted in improved efficiency and reduced redundant tasks.',
        },
        {
            title: 'Executive Supervisor',
            employer: '@IranPharma Int. Expo 2018, Rasayesh, Tehran',
            period: 'Sep 2018',
            skills: ['Communication', 'Improvisation'],
            description:
                'In collaboration with a large team of 12 professionals, I helped with the execution of a week-long Pharmaceutical Exhibition on an international level. My duties consisted of supervising booth assembly & disassembly processes, ensuring the safety of all participants, and translating for and accommodating the needs of foreign participants.',
        },
        {
            title: 'Interior Architect & BIM Specialist',
            employer: 'Farazin, Tehran',
            period: 'August 2019 - December 2019',
            skills: ['Co-Operation', 'Autodesk Revit', 'BIM'],
            description:
                'As a recent Bachelor of Architectural Engineering, I was able to join a professional team of designers & engineers in an industry-leading company and put everything I had learned in BIM, Autodesk Revit, and creating well-designed floor plans to use in a professional work environment.',
        },
        {
            title: 'UI & UX Designer',
            employer: 'Farazin, Tehran',
            period: 'December 2019 - May 2020',
            skills: ['Agile Pipelines'],
            description:
                'I had the honor of designing several projects including in-house Enterprise Resource Planning, and E-Commerce Platforms starting from the design phase to presenting designs to upper management and educating in-house users on tool-chain changes.',
        },
        {
            title: 'Construction Supervisor',
            employer: 'Nikan HVAC, Tehran',
            period: 'July 2020 - February 2021',
            skills: ['Crisis-Management'],
            description:
                'Taking part in a large-scale construction project, I represented the HVAC contractor and ensured the construction followed the documentation provided by the mechanical engineers and the product specifications provided by Nikan HVAC.',
        },
        {
            title: 'Back-End Developer',
            employer: 'Freelance',
            period: 'March 2021 - Present',
            skills: ['Time-Mangement', 'Node.js', 'Express.js', 'REST APIs'],
            description:
                'With the rising severity of the COVID-19 pandemic in Iran, I made the decision to work from home and gain real-world development experience. Being solely responsible to manage my time and deliver to clients was an invaluable experience. Most projects I’ve delivered included web-scraping server-side applications or login credentials servers & databases.',
        },
    ],
    projects: [
        {
            title: 'Transparent Architecture',
            description: `Open-Source web-native interactive 3D presentation of my BArch thesis. You can hide different parts of the structure to see the inner workings!`,
            page: '/projects/bachelors_thesis',
            poster: 'https://i.imgur.com/TR0h5SR.jpg',
            keywords: [
                'Architecture',
                'Javascript',
                'Three.js',
                'WebGL',
                'Revit',
            ],
        },
        {
            title: 'Metaverse Gallery',
            description: `3D presentation space to display virtual artworks. Open-Source web-native starting point to create metaverse experiences. `,
            page: '/projects/metaverse_gallery',
            poster: 'https://i.imgur.com/dCwKw8B.jpg',
            keywords: ['Javascript', 'Three.js', 'Metaverse'],
        },
        {
            title: 'Hestia',
            description: `Open-Source, self-hosted, and gamified Discord bot to build highly-engaged communities around products and services.`,
            page: '/projects/hestia',
            poster: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/22399430/882599fca31a23ad38bd47db302b2a00.png',
            keywords: [
                'Javascript',
                'Discord.js',
                'Gamification',
                'MongoDB Database',
                'Node.js',
            ],
        },
        {
            title: 'Create-Next-Dashboard',
            description:
                '1-Line script that sets in motion a barrage of tools and web services to present the user with a highly customizable, and instantly deployable progressive web application.',
            page: '/projects/create_next_dashboard',
            poster: 'https://i.imgur.com/hNovO0U.png',
            keywords: [
                'Javascript',
                'Next.js',
                'Server-Side-Rendering',
                'Git',
                'NPM',
                'NPX',
            ],
        },
        {
            title: 'Rhino Grasshopper UI Redesign',
            description: `My attempt to bring Rhino Grasshopper's UI up-to-date in Figma!`,
            page: '/projects/grasshopper_redesign',
            poster: 'https://cdn.dribbble.com/users/2782348/screenshots/18605312/media/f5b636c7523f2d4a1afe78d6ff3c6b30.png?compress=1&resize=1600x1200&vertical=top',
            keywords: ['UI/ UX Design', 'Figma'],
        },
        {
            title: 'Parametric Golden-Gate Bridge',
            description: `Fully Parametric Grasshopper script to generate a 3D model of Golden-Gate bridge and physically simulate suspension cables.`,
            page: '/projects/parametric_golden-gate',
            poster: 'https://i.imgur.com/Jb76hkS.jpg',
            keywords: ['Grasshopper'],
        },
    ],
}

export default config
