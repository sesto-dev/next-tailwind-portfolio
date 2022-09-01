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
    const project = config.projects[6]

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
                                <Text h3>Golden-Gate Bridge</Text>
                                <Text small type="secondary">
                                    The Golden-Gate Bridge is a suspension
                                    bridge spanning the Golden-Gate, the
                                    one-mile-wide (1.6 km) strait connecting San
                                    Francisco Bay and the Pacific Ocean. The
                                    structure links the U.S. city of San
                                    Francisco, California—the northern tip of
                                    the San Francisco Peninsula—to Marin County,
                                    carrying both U.S. Route 101 and California
                                    State Route 1 across the strait. The bridge
                                    is one of the most internationally
                                    recognized symbols of San Francisco and
                                    California. It was initially designed by
                                    engineer Joseph Strauss in 1917. It has been
                                    declared one of the Wonders of the Modern
                                    World by the American Society of Civil
                                    Engineers. The Frommer’s travel guide
                                    describes the Golden-Gate Bridge as
                                    “possibly the most beautiful, certainly the
                                    most photographed, bridge in the world.” At
                                    the time of its opening in 1937, it was both
                                    the longest and the tallest suspension
                                    bridge in the world, with a main span of
                                    4,200 feet (1,280 m) and a total height of
                                    746 feet (227 m).
                                </Text>
                                <Display shadow caption="Golden-Gate Bridge">
                                    <Image
                                        width="500pt"
                                        src="https://i.imgur.com/9GIt6Sa.jpg"
                                    />
                                </Display>
                                <Text h3>Parametric Model</Text>
                                <Text small type="secondary">
                                    This parametric model has 2 implementations,
                                    one replica of the original bridge ( with
                                    mast ornaments drawn inside Rhino and
                                    imported onto Grasshopper ) and one deviated
                                    model which is 100% parametric.
                                </Text>
                                <Display shadow caption="Implementations">
                                    <Image
                                        width="500pt"
                                        src="https://i.imgur.com/sPg177v.png"
                                    />
                                </Display>
                                <Display shadow caption="Inputs">
                                    <Image
                                        width="500pt"
                                        src="https://i.imgur.com/TFov4lF.png"
                                    />
                                </Display>
                                <Grid.Container gap={2}>
                                    <Grid xs={12}>
                                        <Text h5>
                                            Section 01 - Railroad
                                            <br />
                                            <Text small type="secondary">
                                                This Cluster is managed via
                                                Metahopper plugin and only gets
                                                enabled if user specifically
                                                enables it’sBoolean toggle.
                                                Railroad’s added width offset is
                                                added to the original Bridge
                                                Floor extrusion. This branching
                                                behaviour is managed via a
                                                Stream Filter component.
                                            </Text>
                                        </Text>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Text h5>
                                            Section 02 to 09 - Bridge Floor
                                            Extrusions
                                            <br />
                                            <Text small type="secondary">
                                                A single origin point is used as
                                                both a transform handle to move
                                                the entire model and a mirror
                                                plane origin as the entire
                                                bridge is symmetrical in two
                                                planes. Simple extrusions are
                                                used to model the bridge floor.
                                                Each section delivers it’s
                                                finished width to the next
                                                section.
                                            </Text>
                                        </Text>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Text h5>
                                            Section 10 to 11 - Light Poles
                                            <br />
                                            <Text small type="secondary">
                                                A simple rectangle frame is
                                                drawn to the required dimensions
                                                and is then arrayed to the
                                                entire length of the bridge at
                                                required intervals. One of the
                                                vertices is removed which
                                                results in two perpendicular
                                                lines. Remaining vertices are
                                                interpolated resulting in
                                                desired shape of the light
                                                poles.
                                            </Text>
                                        </Text>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Text h5>
                                            Section 12 & 13 - Railing and
                                            Railing
                                            <br />
                                            <Text small type="secondary">
                                                Protection Simple rectangles and
                                                boxes are arrayed to the entire
                                                length of the bridge. A
                                                Wireframe modifier is then
                                                applied.
                                            </Text>
                                        </Text>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Text h5>
                                            Section 14 to 17 - Underlying
                                            Supporting
                                            <br />
                                            <Text small type="secondary">
                                                Trusses Rectangles are extruded
                                                to required depths. Lunchbox
                                                plugin is used to draw the
                                                trusses. First Bottom Truss is
                                                removed if Double Deck is
                                                enabled, using the Stream Filter
                                                component.
                                            </Text>
                                        </Text>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Text h5>
                                            Section 18 to 21 - Parametrically
                                            Created Column Section and extrusion
                                            <br />
                                            <Text small type="secondary">
                                                Couple of rectangles are drawn
                                                at different scales and then a
                                                Boolean Union operation is used
                                                to create a clean section. 5
                                                Sections are transformed and
                                                extruded to manually controlled
                                                heights.
                                            </Text>
                                        </Text>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Text h5>
                                            Section 22 & 23 - Mast Trusses
                                            <br />
                                            <Text small type="secondary">
                                                Using variables from previous
                                                section, Required number of
                                                rectangles are drawn between
                                                Masts. Lunchbox plugin is used
                                                to draw trusses.
                                            </Text>
                                        </Text>
                                    </Grid>
                                </Grid.Container>
                                <Display shadow caption="Masts">
                                    <Image
                                        width="500pt"
                                        src="https://i.imgur.com/5u2pRzj.png"
                                    />
                                </Display>
                                <Text h5>
                                    Section 24 & 25 - Foundation & Wavebreaker
                                </Text>
                                <Text small type="secondary">
                                    Finished dimensions of the Masts is used to
                                    parametrically drive the dimensions of the
                                    concrete foundation. An ellipse is drawn
                                    with a manually controlled radius difference
                                    to the foundation to create the
                                    wavebreaker’s geometry.
                                </Text>
                                <Display
                                    shadow
                                    caption="Foundation & Weavebreaker"
                                >
                                    <Image
                                        width="500pt"
                                        src="https://i.imgur.com/DvobyeW.png"
                                    />
                                </Display>

                                <Text h5>Section 27 - Double Deck</Text>
                                <Text small type="secondary">
                                    This Cluster is managed via Metahopper
                                    plugin and only gets enabled if user
                                    specifically enables it’s Boolean toggle.
                                    Bridge Component Geometries are duplicated
                                    and moved to it’s correct position.
                                </Text>
                                <Spacer />
                                <Text h5>
                                    Sections 28 to 32 - Kangaroo Physical
                                    Simulation of Cables
                                </Text>
                                <Text small type="secondary">
                                    Top Connector points on masts are
                                    calculated. For each mast tower counts ( 2
                                    and 4 ) correct lines are drawn, divided and
                                    corresponding points are fed to the Kangaroo
                                    solver. After solving, points are sorted
                                    according to their coordinates and
                                    interpolated to result in a smooth curve.
                                    Cable rings are drawn using circles and pipe
                                    component at required intervals on the
                                    finished Main Cable curves. Two points are
                                    moved from the center of Cable Ring circles
                                    and are extruded using the Line SDL
                                    component resulting in Vertical cables
                                    connected to the bridge hull.
                                </Text>
                                <Display shadow caption="Kangaroo Simulation">
                                    <Image
                                        width="500pt"
                                        src="https://i.imgur.com/4NkZlc5.png"
                                    />
                                </Display>
                                <Display
                                    shadow
                                    caption={
                                        <>
                                            Finisehed product. You can download
                                            the final Grasshopper script using{' '}
                                            <a
                                                href="https://drive.google.com/file/d/1ur_8deSArTfyLPbd2whphq7xdSsBcy20/view?usp=sharing"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                this link.
                                            </a>
                                        </>
                                    }
                                >
                                    <Image
                                        width="500pt"
                                        src="https://i.imgur.com/LrQAIRz.jpg"
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
