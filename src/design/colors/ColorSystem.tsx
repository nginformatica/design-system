import React from 'react'
import {
    CardColor,
    CardHeader,
    ColorsCard,
    Container,
    HeaderColor,
    isLightColor
} from './styles'
import {
    Content,
    ContentBold,
    ContainerTitle,
    ContainerContent,
    Description,
    FlexBetween,
    ListItems,
    OrdenateList,
    Wrapper,
    FigmaRedirect
} from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const {
    red,
    pink,
    lightPink,
    purple,
    indigo,
    darkBlue,
    blue,
    lightBlue,
    lightTeal,
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
        lightBlue,
        lightTeal,
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
            <ContainerTitle>SISTEMA DE CORES</ContainerTitle>
            <hr />
            <FigmaRedirect
                href='https://www.figma.com/design/X7IRemjcDX38XcunlLKuVn/Foundations?node-id=0-1&t=j30FU4pxY1hsVu3m-1'
                target='_blank'
                rel='noreferrer'>
                VISUALIZE NO FIGMA 🎨
            </FigmaRedirect>

            <ContainerContent>
                <Description>
                    Um <b>sistema de cores</b> refere-se ao conjunto completo de
                    cores disponíveis em uma interface. Ele abrange todas as
                    cores que podem ser usadas em diferentes contextos.
                </Description>
                <Description>
                    O sistema de cores para os produtos SaaS da NG foi criado a
                    partir das cores base, que são as cores da marca e também as
                    cores que regem o design de interface. Ele foi projetado
                    para cobrir uma variedade de necessidades visuais e
                    funcionais, mantendo a identidade da marca e a experiência
                    do usuário no centro.
                </Description>

                <Description>
                    Importância de um sistema de cores bem projetado:
                </Description>
                <OrdenateList>
                    <ListItems>
                        <b>Coerência visual: </b>Assegura que todos os elementos
                        visuais tenham um alinhamento consistente com a
                        identidade da marca;
                    </ListItems>
                    <ListItems>
                        <b>Comunicação clara:</b> Ajuda a comunicar ações,
                        estados e intenções de forma clara, usando cores
                        familiares e previsíveis;
                    </ListItems>
                    <ListItems>
                        <b>Escalabilidade:</b> Um sistema de cores bem
                        estruturado pode ser facilmente escalado e adaptado para
                        novas funcionalidades e expansões do produto.
                    </ListItems>
                </OrdenateList>
            </ContainerContent>

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
