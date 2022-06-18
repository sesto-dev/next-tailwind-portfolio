import {
    Card,
    Button,
    Image,
    Link as GeistLink,
    Text,
    useTheme,
    Grid,
    Spacer,
} from '@geist-ui/core'
import Link from 'next/link'

import config from '../main.config'

const Projects = () => {
    return (
        <Grid.Container gap={1}>
            {config.projects.map((project) => (
                <Grid key={project.name} xs={24} sm={12} md={8} xl={6}>
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
            <a>
                <Card key={project.name} width="100%" height="100%">
                    <Image
                        mb={0.5}
                        height="20rem"
                        src={project.image}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <Text b mb={0}>
                        {project.name}
                    </Text>
                    <br />
                    <Text small type="secondary" my={0}>
                        {project.period} - {project.position}
                    </Text>
                </Card>
            </a>
        </Link>
    )
}

export default Projects
