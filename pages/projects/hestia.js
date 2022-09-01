import {
    useTheme,
    Display,
    Text,
    Card,
    Image,
    Grid,
    Spacer,
    Code,
} from '@geist-ui/core'
import Layout from '../../next-dashboard/components/Layout'

import { themePreference } from '../../state/Context'
import config from '../../main.config'

export default function () {
    const theme = useTheme()
    const project = config.projects[4]

    return (
        <>
            <Layout
                config={config}
                themePreference={themePreference}
                crownLarge={project.title}
                crownSmall={project.description}
                metaTitle={project.title}
                metaDescription={project.description}
                metaImage={project.poster}
            >
                <Grid.Container gap={1}>
                    <Grid xs={24}>
                        <Card
                            style={{
                                backgroundColor: theme.palette.accents_1,
                            }}
                            shadow
                            padding={2}
                            width="100%"
                        >
                            <Card.Content>
                                <Text h3>Introduction to Discord.js</Text>
                                <Text small type="secondary">
                                    Discord is a messaging application based
                                    around self-contained & private messaging
                                    boards (called <b>Guilds</b>) each with
                                    their own subset of rules and hierarchies.
                                    Discord was initially for gamers to connect
                                    and play along and for joining gaming
                                    communities. It has voice channels so that
                                    players can play along. But Discord has
                                    changed a lot and people use Discord for
                                    general purposes and not just gaming!
                                    <Spacer />
                                    One important factor of Discord is bots. The
                                    automated bots power the guilds and make it
                                    even more interactive and easy to manage.
                                    Any Discord based community is difficult to
                                    exist without bots. Bots can play any role
                                    in the server, they can be used as a support
                                    bot or a moderation bot which will look
                                    closely at the user’s activities in the
                                    server and warn them on any violation of
                                    rules without any need for moderators
                                    getting involved.
                                    <Spacer />
                                    <a
                                        href="https://github.com/discordjs/discord.js"
                                        target="_blank"
                                    >
                                        Discord.js
                                    </a>{' '}
                                    is a programming SDK that allows developers
                                    to build highly customized bots. This SDK
                                    exposes every event that happens in the
                                    digital city that is a Discord server! The
                                    developer can decide to punish, reward or
                                    react in anyway the developers desire to
                                    these events and unlock the full power of
                                    this platform.
                                </Text>
                                <Display
                                    shadow
                                    caption="Discord UI Representation"
                                >
                                    <Image
                                        width="500pt"
                                        src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/22399430/882599fca31a23ad38bd47db302b2a00.png"
                                    />
                                </Display>
                                <Text h3>Introduction to Hestia</Text>
                                <Text small type="secondary">
                                    Hestia is a self-hosted{' '}
                                    <a
                                        href="http://github.com/accretence/hestia"
                                        target="_blank"
                                    >
                                        open-source
                                    </a>{' '}
                                    Discord bot to onboard users, protect users,
                                    and gamify entertainment & engagement. It is
                                    customizable, composable, and ready to be
                                    deployed in production. It abstracts many of
                                    the common setups required to set up a
                                    Discord bot so that all community owners can
                                    deploy Hestia without a deep programming
                                    knowledge.
                                </Text>
                                <Display shadow caption="Hestia Source-Code">
                                    <a
                                        href="http://github.com/accretence/hestia"
                                        target="_blank"
                                    >
                                        <Card hoverable width="500pt">
                                            <Text b font={1.1}>
                                                🔗 GITHUB
                                            </Text>
                                            <br />
                                            <Code
                                                style={{ fontSize: '0.8rem' }}
                                            >
                                                https://github.com/accretence/hestia
                                            </Code>
                                        </Card>
                                    </a>
                                </Display>
                                <Text h3>
                                    Gamifying Engagement - Illustrated via User
                                    Flow-Map
                                </Text>
                                <Text small type="secondary">
                                    Hestia gamifies engagement through multiple
                                    avenues. All users are registered on a
                                    leaderboard when they enter the server. They
                                    can engagem in multiple activies to advance
                                    their rank. Simply chatting in channels earn
                                    a steady amount of <Code>XP</Code> but
                                    playing command-based games can earn much
                                    greater amount of <Code>XP</Code>!
                                </Text>
                                <Display
                                    shadow
                                    caption="Interactive User Flow-Map. Click on 'See the board' 👆"
                                >
                                    <iframe
                                        width="900pt"
                                        height="600pt"
                                        src="https://miro.com/app/live-embed/uXjVOr855ig=/?moveToViewport=-1192,-669,2048,1200"
                                        frameBorder="0"
                                        scrolling="no"
                                        allowFullScreen
                                    />
                                </Display>
                            </Card.Content>
                        </Card>
                    </Grid>
                </Grid.Container>
            </Layout>
            <style jsx global>
                {`
                    .content {
                        text-align: justify !important;
                    }
                `}
            </style>
        </>
    )
}
