import { useState } from 'react'
import Scene from '../../components/three/Thesis'
import Container from '../../components/Container'

export default function () {
    const [visibilities, setVisibilities] = useState({
        floor: true,
        ceiling: true,
        piping: true,
        ducting: true,
        lighting: true,
        structure: true,
        walls: true,
        panels: true,
        rooms: true,
    })

    let options = [
        'floor',
        'ceiling',
        'piping',
        'ducting',
        'lighting',
        'structure',
        'walls',
        'panels',
        'rooms',
    ]

    const handler = (val) => {
        let temp = {}

        for (let i = 0; i < options.length; i++) {
            const element = options[i]
            temp[element] = false
        }

        for (let j = 0; j < val.length; j++) {
            const element = val[j]
            temp[element] = true
        }

        setVisibilities(temp)
    }

    return (
        <Container>
            <div
                style={{
                    backgroundColor: theme.palette.accents_1,
                }}
                shadow
                width="100%"
            >
                <Scene visibilities={visibilities} />
                <div mx={1} mt={0.5}>
                    <p>
                        You can interact with the 3D Model above 👆 using your
                        mouse or touch-screen!
                        <br />
                        ... or turn parts On/ Off ⚡🔌 in the model using this
                        👇 menu!
                    </p>
                    <Checkbox.Group value={options} onChange={handler}>
                        <Grid.Container gap={1}>
                            {options.map((option) => (
                                <Grid key={option} xs={12} sm={8} md={6} my={1}>
                                    <Checkbox type="secondary" value={option}>
                                        <Description
                                            title="Geometry"
                                            content={option.toUpperCase()}
                                        />
                                    </Checkbox>
                                </Grid>
                            ))}
                        </Grid.Container>
                    </Checkbox.Group>
                    <Spacer />
                    <Text type="secondary">
                        You can read the full presentation documentation{' '}
                        <a
                            href="https://drive.google.com/file/d/1L14SigVJXECHbRlG4yqt_H056ij_nsxV/view"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here.
                        </a>
                    </Text>
                </div>
            </div>
        </Container>
    )
}
