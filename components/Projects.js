import {
    Card,
    Button,
    Image,
    Link as GeistLink,
    Text,
    useTheme,
    Grid,
    Spacer,
    Badge,
} from '@geist-ui/core'
import Link from 'next/link'

import config from '../main.config'

const Projects = () => {
    return (
        <Grid.Container gap={1}>
            {config.projects.map((project) => (
                <Grid key={project.name} sm={24} md={12} xl={8}>
                    <Project key={project.name} project={project} />
                </Grid>
            ))}
        </Grid.Container>
    )
}

const Project = ({ project }) => {
    const theme = useTheme()

    return (
        <Link href={project.page}>
            <a style={{ width: '100%' }}>
                <Card hoverable key={project.name} width="100%" height="100%">
                    <Image
                        mb={0.5}
                        height="20rem"
                        width="100%"
                        src={project.poster}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <Text b mb={0}>
                        {project.name},{' '}
                    </Text>
                    <Text small type="secondary">
                        {project.description}
                    </Text>
                    <br />
                    {project.keywords.map((keyword) => (
                        <Badge
                            key={keyword}
                            type="secondary"
                            mr={0.3}
                            scale="0.5"
                        >
                            {keyword}
                        </Badge>
                    ))}
                </Card>
            </a>
        </Link>
    )
}

export default Projects
