import { Card, Image, Link, Text, useTheme } from '@geist-ui/core'

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
                                <Link
                                    mx={0.333}
                                    target="_blank"
                                    rel="noopener"
                                    href={project.links[key]}
                                >
                                    {key}
                                </Link>
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
