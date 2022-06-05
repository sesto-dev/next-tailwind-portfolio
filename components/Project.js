import { Card, Image, Link as GeistLink, Text, useTheme } from '@geist-ui/core'

const Project = ({ project }) => {
    const theme = useTheme()

    return (
        <>
            <Card key={project.name} mt={1}>
                <Image
                    height="20rem"
                    src={project.image}
                    style={{
                        objectFit: 'cover',
                    }}
                />
                <div className="Flex">
                    <Text h3>{project.name}</Text>
                    <div>
                        <Text mr={0.333} small b>
                            {Object.keys(project.links).map((key) => (
                                <GeistLink
                                    mx={0.333}
                                    target="_blank"
                                    rel="noopener"
                                    href={project.links[key]}
                                >
                                    {key}
                                </GeistLink>
                            ))}
                        </Text>
                    </div>
                </div>
                <Text small b>
                    {project.position}, {project.period}
                </Text>
                <br />
                <Text small>{project.description}</Text>
            </Card>
            <style jsx global>
                {`
                    .Flex {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            </style>
        </>
    )
}

export default Project
