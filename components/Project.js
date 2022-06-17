import {
    Card,
    Button,
    Image,
    Link as GeistLink,
    Text,
    useTheme,
} from '@geist-ui/core'
import Link from 'next/link'

const Project = ({ project }) => {
    const theme = useTheme()

    return (
        <Card key={project.name} width="100%">
            <Image
                mb={0.75}
                height="20rem"
                src={project.image}
                style={{
                    objectFit: 'cover',
                }}
            />
            <Link href={project.page}>
                <GeistLink underline>
                    <Text my={0} font="1.2rem">
                        🔗 {project.name}
                    </Text>
                </GeistLink>
            </Link>
            <br />
            <Text small type="secondary" mt={0}>
                {project.period} - {project.position} -{' '}
                {Object.keys(project.links).map((key) => (
                    <GeistLink
                        key={project.links[key]}
                        underline
                        mx={0.333}
                        target="_blank"
                        rel="noopener"
                        href={project.links[key]}
                    >
                        🔗 {key}
                    </GeistLink>
                ))}
            </Text>
        </Card>
    )
}

export default Project
