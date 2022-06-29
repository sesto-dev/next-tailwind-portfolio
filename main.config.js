const config = {
    theme: {
        width: '900pt',
    },
    meta: {
        title: 'Accretence',
        description: "Amirhossein Mohammadi's Personal Website & Portfolio! 👨‍💻",
        url: 'https://accretence.com',
        image: 'https://i.imgur.com/NitQE9d.jpg',
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
                'As a student studying architectural engineering, I helped transition a traditional design and construction company to a more contemporary and sustainable technical multi-desciplinary pipeline in a 6 months L&D program.',
        },
        {
            title: 'Executive Supervisor',
            employer: '@IranPharma Int. Expo 2018, Rasayesh, Tehran',
            period: 'Sep 2018',
            skills: ['Communication', 'Improvisation'],
            description:
                'In a collaboration with a large team of 12 professionals, I helped with the execution of a week-long Pharmaceutical Exhibition on an international level. My duties consisted of supervising booth assembly & disassembly processes, ensuring the safety of all participants and stakeholders, and translating for and accommodating the needs of foreign participants.',
        },
        {
            title: 'Interior Architect & BIM Specialist',
            employer: 'Farazin, Tehran',
            period: 'August 2019 - December 2019',
            skills: ['Co-Operation', 'Autodesk Revit', 'BIM'],
            description:
                'As a recent Bachelor of Architecture graduate, I was able to join a great team of designers and engineers in an industry-leading company. I was able to bring my 3D Modelling and Rendering skills and improve the company’s presentation capabilities.',
        },
        {
            title: 'UI & UX Designer',
            employer: 'Farazin, Tehran',
            period: 'December 2019 - May 2020',
            skills: ['Agile Pipelines'],
            description:
                'In my first experience in the development industry, I was able to work with an amazing group of individuals and web engineers and gain experience in both UI & UX Design, and front-end development. I was given the opportunity to work on several projects including in-house CRM, Resource & Project Management and Analysis, and E-Commerce Platforms from the design phase to presenting designs to upper management and educating in-house users on tool-chain changes.',
        },
        {
            title: 'Back-End Developer',
            employer: 'Freelance',
            period: 'June 2020 - Present',
            skills: ['Time-Mangement', 'Valuation Techniques'],
            description:
                'I have kept myself busy since the beginning of the COVID-19 pandemic by doing freelance Back-End Development projects to earn income working from home & gain real-world development experience.',
        },
        {
            title: 'Construction Supervisor',
            employer: 'Nikan HVAC, Tehran',
            period: 'September 2020 - March 2021',
            skills: ['Crisis-Management'],
            description:
                'I have had the honor of trying my hand at supervising a large-scale industrial construction project. I represented the HVAC contractor and ensured the construction followed the documentation provided by the mechanical engineers and the product specifications provided by Nikan HVAC.',
        },
    ],
    projects: [
        {
            description: `Open-Source Web-Ready Interactive 3D Presentation of my BArch thesis. You can hide different parts of the building to see the inner workings!`,
            name: 'Transparent Architecture',
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
            description: `Open-Source, Self-Hosted and Gamified Discord Bot to build highly-engaged communities around products and services.`,
            name: 'Hestia',
            page: '/projects/hestia',
            poster: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/22399430/882599fca31a23ad38bd47db302b2a00.png',
            keywords: [
                'Discord.js',
                'Javascript',
                'Gamification',
                'MongoDB Database',
                'Node.js',
                'User-Flow-Map',
            ],
        },
        {
            description:
                '1-Line script that sets in motion a barrage of tools and web-services to deploy a highly-customizable state-of-the-art website, like this one!',
            name: 'Create-Next-Dashboard',
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
            description: `My attempt to bring Rhino Grasshopper's UI up-to-date in Figma!`,
            name: 'Rhino Grasshopper UI Redesign',
            page: '/projects/grasshopper_redesign',
            poster: 'https://cdn.dribbble.com/users/2782348/screenshots/18605312/media/f5b636c7523f2d4a1afe78d6ff3c6b30.png?compress=1&resize=1600x1200&vertical=top',
            keywords: ['UI/ UX Design', 'Figma'],
        },
    ],
}

export default config
