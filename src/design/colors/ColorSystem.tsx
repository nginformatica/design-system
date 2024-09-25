import React from 'react'
import {
    ColorsCard,
    CardHeader,
    HeaderColor,
    ContentBold,
    CardColor,
    Container,
    isLightColor,
    ContainerTitle,
    ContainerContent
} from './styles'
import { Content, FlexBetween, Wrapper } from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const {
    red,
    pink,
    lightPink,
    purple,
    indigo,
    darkBlue,
    blue,
    teal,
    green,
    lightGreen,
    amber,
    orange,
    deepOrange,
    brown,
    lightBrown,
    gray,
    neutral
} = theme.colors

export const ColorSystem = () => {
    const colors = {
        red,
        pink,
        lightPink,
        purple,
        indigo,
        darkBlue,
        blue,
        teal,
        green,
        lightGreen,
        amber,
        orange,
        deepOrange,
        brown,
        lightBrown,
        gray
    }

    return (
        <Wrapper>
            <ContainerTitle>COLOR SYSTEM</ContainerTitle>
            <hr />
            <ContainerContent>Descrição</ContainerContent>

            <Container name='color-system'>
                {Object.keys(colors).map(color => (
                    <ColorsCard key={color}>
                        <CardHeader
                            background={
                                colors[color as keyof typeof colors][600]
                            }>
                            <HeaderColor>{color}</HeaderColor>
                            <FlexBetween>
                                <ContentBold>600</ContentBold>
                                <Content>
                                    {colors[color as keyof typeof colors][600]}
                                </Content>
                            </FlexBetween>
                        </CardHeader>
                        {Object.entries(
                            colors[color as keyof typeof colors]
                        ).map(([tone, hex]) => (
                            <CardColor
                                key={tone}
                                background={hex}
                                light={isLightColor(hex)}>
                                <ContentBold>{tone}</ContentBold>
                                <Content>{hex}</Content>
                            </CardColor>
                        ))}
                    </ColorsCard>
                ))}

                <ColorsCard key='neutral'>
                    <CardHeader background={neutral[200]}>
                        <HeaderColor>Neutral</HeaderColor>
                        <FlexBetween>
                            <ContentBold>200</ContentBold>
                            <Content>{neutral[200]}</Content>
                        </FlexBetween>
                    </CardHeader>
                    {Object.entries(neutral).map(([tone, hex]) => (
                        <CardColor
                            key={tone}
                            background={hex}
                            light={isLightColor(hex)}>
                            <ContentBold>{tone}</ContentBold>
                            <Content>{hex}</Content>
                        </CardColor>
                    ))}
                </ColorsCard>
            </Container>
        </Wrapper>
    )
}
