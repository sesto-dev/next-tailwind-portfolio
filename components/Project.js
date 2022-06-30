import { Card, Image, Text, Spacer, Badge } from '@geist-ui/core'
import Link from 'next/link'

const Project = ({ theme, project }) => {
    return (
        <Link href={project.page}>
            <a style={{ width: '100%', textAlign: 'justify' }}>
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
                    <Text small style={{ color: `${theme.palette.accents_6}` }}>
                        {project.description}
                    </Text>
                    <Spacer mt={0} />
                    {project.keywords.map((keyword) => (
                        <Badge
                            key={keyword}
                            mr={0.3}
                            scale="0.5"
                            style={{
                                backgroundColor: `${theme.palette.accents_2}`,
                                color: `${theme.palette.foreground}`,
                            }}
                        >
                            {keyword}
                        </Badge>
                    ))}
                </Card>
            </a>
        </Link>
    )
}

export default Project
