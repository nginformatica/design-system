import React from 'react'
import { Table, TableHead, TableRow, Typography } from 'flipper-ui'
import { TableBodyTransparent, TableCellTransparent } from './styles'
import {
    Content,
    Wrapper,
    Container,
    FlexColumn,
    FigmaRedirect,
    ContainerProps,
    ContainerContent,
    PropsDescription,
    DescriptionProps,
    FlexBetweenColumn
} from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const { gray, indigo, neutral, orange, primary, secondary } = theme.colors

type ITableBody = {
    variant: string
    fontSize: string
    fontWeight: string
    lineHeight: string
    letterSpacing: string
}[]

const tableHead = [
    'display',
    'style',
    'font-size',
    'font-weight',
    'line-height',
    'letter-spacing'
]

const tableBody: ITableBody = [
    {
        variant: 'displayLarge',
        fontSize: '56px',
        fontWeight: '400',
        lineHeight: '1.12',
        letterSpacing: '0.25'
    },
    {
        variant: 'displayMedium',
        fontSize: '46px',
        fontWeight: '400',
        lineHeight: '1.16',
        letterSpacing: '0'
    },
    {
        variant: 'displaySmall',
        fontSize: '36px',
        fontWeight: '400',
        lineHeight: '1.22',
        letterSpacing: '0'
    },
    {
        variant: 'headlineLarge',
        fontSize: '32px',
        fontWeight: '400',
        lineHeight: '1.25',
        letterSpacing: '0'
    },
    {
        variant: 'headlineMedium',
        fontSize: '28px',
        fontWeight: '400',
        lineHeight: '1.29',
        letterSpacing: '0'
    },
    {
        variant: 'headlineSmall',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '1.33',
        letterSpacing: '0'
    },
    {
        variant: 'titleLarge',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '1.27',
        letterSpacing: '0'
    },
    {
        variant: 'titleMedium',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.5',
        letterSpacing: '0.15'
    },
    {
        variant: 'titleSmall',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '1.43',
        letterSpacing: '0.1'
    },
    {
        variant: 'bodyLarge',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0.5'
    },
    {
        variant: 'bodyMedium',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '1.43',
        letterSpacing: '0.25'
    },
    {
        variant: 'bodySmall',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '1.33',
        letterSpacing: '0.4'
    },
    {
        variant: 'labelLarge',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '1.43',
        letterSpacing: '0.1'
    },
    {
        variant: 'labelMedium',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '1.33',
        letterSpacing: '0.5'
    },
    {
        variant: 'labelSmall',
        fontSize: '10px',
        fontWeight: '500',
        lineHeight: '1.45',
        letterSpacing: '0.5'
    }
]

const fontSize = [
    {
        size: '18px',
        prop: `
Text(
    "Aa", 
    style: TextStyle(fontSize:18)
)
            `
    },
    {
        size: '26px',
        prop: `
Text(
    "Aa", 
    style: TextStyle(fontSize:26)
)
            `
    },
    {
        size: '32px',
        prop: `
Text(
    "Aa", 
    style: TextStyle(fontSize:32)
)
            `
    },
    {
        size: '46px',
        prop: `
Text(
    "Aa", 
    style: TextStyle(fontSize:46)
)
            `
    }
]

const fontColor = [
    {
        color: primary.main,
        prop: `
Text(
    'Aa',
    style: const TextStyle(
        color: NGColors.primary_main,
    ),
)
            `
    },
    {
        color: secondary.main,
        prop: `
Text(
    'Aa',
    style: const TextStyle(
        color: NGColors.secondary_main,
    ),
)
            `
    },
    {
        color: indigo[600],
        prop: `
Text(
    'Aa',
    style: TextStyle(
        color: NGColors.indigo.shade600,
    ),
)
            `
    },
    {
        color: orange[500],
        prop: `
Text(
    'Aa',
    style: TextStyle(
        color: NGColors.orange.shade500,
    ),
)
            `
    }
]

export const TypographyMobile = () => {
    return (
        <Wrapper>
            <Typography variant='h5' fontWeight={600} sx={{ color: gray[800] }}>
                TIPOGRAFIA MOBILE
            </Typography>

            <hr />

            <FigmaRedirect
                href='https://www.figma.com/design/X7IRemjcDX38XcunlLKuVn/Foundations?node-id=1-2&t=LeIzan5rXWdhCYVi-1'
                target='_blank'
                rel='noreferrer'>
                VISUALIZE NO FIGMA 🎨
            </FigmaRedirect>

            <ContainerContent>
                <Typography variant='body1' margin='12px 0' align='justify'>
                    Como nossa tipografia é utilizada diretamente do{' '}
                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                        style={{ color: neutral[200] }}>
                        <b>ng-kit</b>
                    </a>
                    , ela conta com algumas props nativas que podem ser
                    alteradas. No entanto, recomenda-se evitar ao máximo burlar
                    as características originais propostas para a tipografia, a
                    fim de padronizar as aplicações.
                </Typography>

                <DescriptionProps>
                    <FlexColumn>
                        <PropsDescription>
                            <Typography variant='h6'>Tamanho</Typography>
                            <Typography align='justify'>
                                Para alterar o tamanho da tipografia, utilize a
                                prop
                                <b>
                                    <code> style</code>
                                </b>
                                . Ela aceita valores de{' '}
                                <b>
                                    <code>
                                        {' '}
                                        "displayLarge | displayMedium |
                                        displaySmall | headlineLarge |
                                        headlineMedium | headlineSmall |
                                        titleLarge | titleMedium | titleSmall |
                                        bodyLarge | bodyMedium | bodySmall |
                                        labelLarge | labelMedium | labelSmall"
                                    </code>
                                </b>
                                , sendo o
                                <b>
                                    <code> "bodyMedium" </code>
                                </b>
                                o tamanho default. Para tamanhos diferentes,
                                utilize a prop
                                <b>
                                    <code> fontSize.</code>
                                </b>
                            </Typography>
                        </PropsDescription>

                        <ContainerProps
                            align
                            justify
                            name='ngkit-typography-size'>
                            {fontSize.map((it, i) => (
                                <FlexBetweenColumn key={i}>
                                    <Typography
                                        fontSize={it.size}
                                        sx={{ color: primary.main }}>
                                        Aa
                                    </Typography>
                                    <Typography
                                        variant='caption'
                                        fontSize={11}
                                        sx={{ whiteSpace: 'pre-wrap' }}>
                                        <code>{it.prop}</code>
                                    </Typography>
                                </FlexBetweenColumn>
                            ))}
                        </ContainerProps>
                    </FlexColumn>

                    <FlexColumn>
                        <PropsDescription>
                            <Typography variant='h6'>Cores</Typography>
                            <Typography align='justify'>
                                Para alterar a cor da tipografia utilize a prop
                                <b>
                                    <code> color</code>
                                </b>
                            </Typography>
                        </PropsDescription>

                        <ContainerProps justify name='ngkit-typography-color'>
                            {fontColor.map((it, i) => (
                                <FlexBetweenColumn key={i}>
                                    <Typography
                                        variant='h3'
                                        sx={{ color: it.color }}>
                                        Aa
                                    </Typography>
                                    <Typography
                                        variant='caption'
                                        fontSize={11}
                                        sx={{ whiteSpace: 'pre-wrap' }}>
                                        <code>{it.prop}</code>
                                    </Typography>
                                </FlexBetweenColumn>
                            ))}
                        </ContainerProps>
                    </FlexColumn>
                </DescriptionProps>
            </ContainerContent>

            <Content>
                <Typography variant='h6' margin='24px 0 0'>
                    Tipografia
                </Typography>
                <Container name='mui-typography'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {tableHead.map(it => {
                                    return (
                                        <TableCellTransparent
                                            key={it}
                                            align='center'
                                            padding='24px 0'>
                                            <code>{it}</code>
                                        </TableCellTransparent>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBodyTransparent>
                            {tableBody.map((it, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCellTransparent align='center'>
                                            <Typography
                                                sx={{
                                                    color: primary.main,
                                                    fontSize: it.fontSize
                                                }}>
                                                This is a text!
                                            </Typography>
                                        </TableCellTransparent>
                                        <TableCellTransparent
                                            align='center'
                                            padding='56px 0px'>
                                            <Typography>
                                                {it.variant}
                                            </Typography>
                                        </TableCellTransparent>
                                        <TableCellTransparent
                                            align='center'
                                            padding='56px 0px'>
                                            <Typography>
                                                {it.fontSize}
                                            </Typography>
                                        </TableCellTransparent>
                                        <TableCellTransparent
                                            align='center'
                                            padding='56px 0px'>
                                            <Typography>
                                                {it.fontWeight}
                                            </Typography>
                                        </TableCellTransparent>
                                        <TableCellTransparent
                                            align='center'
                                            padding='56px 0px'>
                                            <Typography>
                                                {it.lineHeight}
                                            </Typography>
                                        </TableCellTransparent>
                                        <TableCellTransparent
                                            align='center'
                                            padding='56px 0px'>
                                            <Typography>
                                                {it.letterSpacing}
                                            </Typography>
                                        </TableCellTransparent>
                                    </TableRow>
                                )
                            })}
                        </TableBodyTransparent>
                    </Table>
                </Container>
            </Content>
        </Wrapper>
    )
}
