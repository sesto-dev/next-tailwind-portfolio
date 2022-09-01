import { Badge, Card, Image, Spacer, Text, Code } from '@geist-ui/core'

export default function ({ exp, theme }) {
    return (
        <Card width="100%" className="justify">
            {exp.poster && (
                <Image
                    mb={0.5}
                    height="10rem"
                    width="100%"
                    src={exp.poster}
                    style={{
                        objectFit: 'cover',
                    }}
                />
            )}
            <Code style={{ fontSize: '1.2rem' }} my={0}>
                {exp.title}
            </Code>
            <br />
            <Text small b>
                {exp.employer}, {exp.period}
            </Text>
            <Spacer />
            <Text small type="secondary">
                {exp.description}
            </Text>
            {exp.skills && exp.skills != [] && (
                <>
                    <Spacer />
                    <Text small type="secondary">
                        Skill Developed:
                    </Text>
                    <br />
                    {exp.skills.map((skill) => (
                        <Badge
                            key={skill}
                            mr={0.3}
                            scale="0.5"
                            style={{
                                backgroundColor: theme.palette.accents_2,
                                color: theme.palette.foreground,
                            }}
                        >
                            {skill}
                        </Badge>
                    ))}
                </>
            )}
        </Card>
    )
}
