import React from 'react'
import { Typography } from 'flipper-ui'
import {
    Column,
    ColumnsContent,
    ColumnsFixed,
    ColumnsFluid,
    ColumnsSpacing,
    Spacing
} from './styles'
import {
    Content,
    Wrapper,
    Container,
    ContainerContent
} from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const { gray, green, primary, orange } = theme.colors

const spacingProps = [
    {
        title: 'Espaçamentos',
        code: (
            <div style={{ whiteSpace: 'pre-wrap' }}>
                {`
    <div
        style={{
            display: flex;
            gap: 4px;
            padding: 8px;
        }}
    />`}
            </div>
        ),
        view: (
            <ColumnsSpacing>
                <Spacing />
                <Spacing />
                <Spacing />
                <Spacing />
                <Spacing />
                <Spacing />
            </ColumnsSpacing>
        )
    },
    {
        title: 'Colunas fluidas',
        code: (
            <div style={{ whiteSpace: 'pre-wrap' }}>
                {`
    <div
        style={{
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr 2fr;
        }}
    />`}
            </div>
        ),
        view: (
            <ColumnsFluid>
                <Column color={green[400]} />
                <Column color={green[600]} />
            </ColumnsFluid>
        )
    },
    {
        title: 'Colunas fixas',
        code: (
            <div style={{ whiteSpace: 'pre-wrap' }}>
                {`
    <div
        style={{
            display: grid;
            gap: 8px;
            grid-template-columns: 120px 160px;
        }}
    />`}
            </div>
        ),
        view: (
            <ColumnsFixed>
                <Column color={orange[500]} />
                <Column color={orange[700]} />
            </ColumnsFixed>
        )
    }
]

export const SpacingWeb = () => {
    return (
        <Wrapper>
            <ContainerContent>
                <Typography variant='h6' sx={{ color: gray[800] }}>
                    ESPAÇAMENTO WEB
                </Typography>

                <hr />

                <Typography margin='16px 0' align='justify'>
                    No desenvolvimento web, centralizar todos os espaçamentos em
                    um único componente nem sempre é viável. Devido à variedade
                    de contextos, é comum aplicar
                    <code> paddings, margins e gaps </code>
                    diretamente onde são necessários, sempre respeitando a
                    lógica dos
                    <b> múltiplos de 4px (4, 8, 12, 16, 20, etc.). </b>
                    Isso garante consistência visual sem abrir mão da
                    flexibilidade no layout.
                </Typography>
            </ContainerContent>

            <Content>
                <Container name='mui-web-spacing'>
                    {spacingProps.map((it, i) => {
                        return (
                            <div key={i}>
                                <Typography
                                    variant='body1'
                                    fontWeight={500}
                                    sx={{ color: primary.main }}>
                                    {it.title}
                                </Typography>

                                <ColumnsContent>{it.view}</ColumnsContent>

                                <code>{it.code}</code>
                            </div>
                        )
                    })}
                </Container>
            </Content>
        </Wrapper>
    )
}
