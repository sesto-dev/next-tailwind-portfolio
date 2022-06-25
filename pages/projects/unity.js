import { Unity, useUnityContext } from 'react-unity-webgl'
import { useState } from 'react'
import Link from 'next/link'
import { Card, Spacer, Text, Select, Grid } from '@geist-ui/core'
import { Layout } from '../../geist-abstraction'

import { themePreference } from '../../state/Context'
import config from '../../main.config'

const Thesis = () => {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: '../../assets/unity/portal/Build/Portal.loader.js',
        dataUrl: '../../assets/unity/portal/Build/Portal.data',
        frameworkUrl: '../../assets/unity/portal/Build/Portal.framework.js',
        codeUrl: '../../assets/unity/portal/Build/Portal.wasm',
    })

    return (
        <>
            <Layout
                config={config}
                themePreference={themePreference}
                crownLarge="Bachelor's Thesis: Transparent Architecture"
                crownSmall="June 2019 - Bachelor's of Architectural Engineering"
                metaTitle="Transparent Architecture"
                metaDescription="June 2019 - Bachelor's of Architectural Engineering Thesis"
                metaImage="https://i.imgur.com/BBmqRBv.jpg"
            >
                <Grid.Container gap={1}>
                    <Grid xs={24}>
                        <Unity
                            style={{ width: '100%', height: 600 }}
                            unityProvider={unityProvider}
                        />
                    </Grid>
                </Grid.Container>
            </Layout>
            <style jsx global>
                {`
                    .content {
                        height: 100% !important;
                    }
                    small {
                        text-align: justify;
                    }
                `}
            </style>
        </>
    )
}

export default Thesis
