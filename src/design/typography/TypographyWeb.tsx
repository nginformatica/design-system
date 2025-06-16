import React from 'react'
import { Table, TableHead, TableRow, Typography } from 'flipper-ui'
import type { TypographyProps } from '@mui/material/Typography'
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
    variant: TypographyProps['variant']
    fontSize: string
    fontWeight: string
    lineHeight: string
}[]

const tableHead = [
    'display',
    'variant',
    'font-size',
    'font-weight',
    'line-height'
]

const tableBody: ITableBody = [
    {
        variant: 'h1',
        fontSize: '96px/6rem',
        fontWeight: '300',
        lineHeight: '1.167'
    },
    {
        variant: 'h2',
        fontSize: '60px/3.75rem',
        fontWeight: '300',
        lineHeight: '1.2'
    },
    {
        variant: 'h3',
        fontSize: '48px/3rem',
        fontWeight: '400',
        lineHeight: '1.167'
    },
    {
        variant: 'h4',
        fontSize: '34px/2.125rem',
        fontWeight: '400',
        lineHeight: '1.235'
    },
    {
        variant: 'h5',
        fontSize: '24px/1.5rem',
        fontWeight: '400',
        lineHeight: '1.334'
    },
    {
        variant: 'h6',
        fontSize: '20px/1.25rem',
        fontWeight: '500',
        lineHeight: '1.6'
    },
    {
        variant: 'subtitle1',
        fontSize: '16px/1rem',
        fontWeight: '400',
        lineHeight: '1.75'
    },
    {
        variant: 'subtitle2',
        fontSize: '14px/0.875rem',
        fontWeight: '500',
        lineHeight: '1.57'
    },
    {
        variant: 'body1',
        fontSize: '16px/1rem',
        fontWeight: '400',
        lineHeight: '1.5'
    },
    {
        variant: 'body2',
        fontSize: '14px/0.875rem',
        fontWeight: '400',
        lineHeight: '1.43'
    },
    {
        variant: 'caption',
        fontSize: '12px/0.75rem',
        fontWeight: '400',
        lineHeight: '1.66'
    },
    {
        variant: 'button',
        fontSize: '14px/0.875rem',
        fontWeight: '500',
        lineHeight: '1.75'
    },
    {
        variant: 'overline',
        fontSize: '12px/0.75rem',
        fontWeight: '400',
        lineHeight: '2.66'
    }
]

const fontSize = [
    {
        size: '18px',
        prop: '<Typography fontSize={18} />'
    },
    {
        size: '26px',
        prop: '<Typography fontSize={26} />'
    },
    {
        size: '32px',
        prop: '<Typography fontSize={32} />'
    },
    {
        size: '46px',
        prop: '<Typography fontSize={46} />'
    }
]

const fontColor = [
    {
        color: primary.main,
        prop: "<Typography color='primary' />"
    },
    {
        color: secondary.main,
        prop: "<Typography color='secondary' />"
    },
    {
        color: indigo[600],
        prop: '<Typography sx={{ color: indigo[600]}} />'
    },
    {
        color: orange[500],
        prop: '<Typography sx={{ color: orange[500]}} />'
    }
]

export const TypographyWeb = () => {
    return (
        <Wrapper>
            <Typography variant='h6' sx={{ color: gray[800] }}>
                TIPOGRAFIA WEB
            </Typography>

            <hr />

            <FigmaRedirect
                href='https://www.figma.com/design/X7IRemjcDX38XcunlLKuVn/Foundations?node-id=1-2&t=LeIzan5rXWdhCYVi-1'
                target='_blank'
                rel='noreferrer'>
                VISUALIZE NO FIGMA 🎨
            </FigmaRedirect>

            <ContainerContent>
                <Typography margin='16px 0' align='justify'>
                    Como nossa tipografia é utilizada diretamente do{' '}
                    <a
                        href='https://mui.com/material-ui/react-typography/?srsltid=AfmBOooYZz9m_WdQaIOKRaGj7Vh9lflQFFbuEJMi0TCIhXLN3H19wmPf'
                        target='_blank'
                        rel='noreferrer'
                        style={{ color: neutral[200] }}>
                        <b>@mui</b>
                    </a>
                    , através do{' '}
                    <a
                        href='https://flipper-ui.ngi.com.br/?path=/docs/datadisplay-typography--docs'
                        target='_blank'
                        rel='noreferrer'
                        style={{ color: neutral[200] }}>
                        <b>flipper-ui</b>
                    </a>
                    , ela conta com algumas props nativas que podem ser
                    alteradas. No entanto, recomenda-se evitar ao máximo burlar
                    as características originais propostas para a tipografia, a
                    fim de padronizar as aplicações.
                </Typography>

                <DescriptionProps>
                    <PropsDescription>
                        <Typography variant='body1' fontWeight={500}>
                            Propriedades
                        </Typography>
                        <Typography align='justify'>
                            Como um utilitário CSS, o componente suporta todas
                            propriedades system. Para alterar as propriedades da
                            tipografia, utilize as props nativas do componente.
                            Caso o componente não suporte alguma propriedade,
                            utilize
                            <b>
                                <code> sx </code>
                            </b>
                            para uma customização mais específica.
                        </Typography>
                    </PropsDescription>

                    <FlexColumn>
                        <PropsDescription>
                            <Typography variant='body1' fontWeight={500}>
                                Tamanho
                            </Typography>
                            <Typography align='justify'>
                                Para alterar o tamanho da tipografia, utilize a
                                prop
                                <b>
                                    <code> variant</code>
                                </b>
                                . Ela aceita valores de{' '}
                                <b>
                                    <code>
                                        {' '}
                                        "h1 | h2 | h3 | h4 | h5 | h6 | subtitle1
                                        | subtitle2 | body1 | body2 | button |
                                        caption | overline"
                                    </code>
                                </b>
                                , sendo o
                                <b>
                                    <code> "body2" </code>
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
                            name='mui-typography-size'>
                            {fontSize.map((it, i) => (
                                <FlexBetweenColumn key={i}>
                                    <Typography
                                        fontSize={it.size}
                                        sx={{ color: primary.main }}>
                                        Aa
                                    </Typography>
                                    <Typography
                                        variant='caption'
                                        margin='6px 0 0'>
                                        <code>{it.prop}</code>
                                    </Typography>
                                </FlexBetweenColumn>
                            ))}
                        </ContainerProps>
                    </FlexColumn>

                    <FlexColumn>
                        <PropsDescription>
                            <Typography variant='body1' fontWeight={500}>
                                Cores
                            </Typography>
                            <Typography align='justify'>
                                Para alterar a cor da tipografia utilize a prop
                                <b>
                                    <code> color</code>
                                </b>
                                . Ela aceita os valores de{' '}
                                <b>
                                    <code>
                                        "error | info | primary | secondary |
                                        success | textDisabled | textPrimary |
                                        textSecondary | warning".
                                    </code>
                                </b>{' '}
                                Para cores diferentes, utilize a prop
                                <b>
                                    <code> sx</code>
                                </b>
                                , especificando a cor da tipografia através do
                                atributo
                                <b>
                                    <code> color.</code>
                                </b>
                            </Typography>
                        </PropsDescription>

                        <ContainerProps justify name='mui-typography-color'>
                            {fontColor.map((it, i) => (
                                <FlexBetweenColumn key={i}>
                                    <Typography
                                        variant='h4'
                                        sx={{ color: it.color }}>
                                        Aa
                                    </Typography>
                                    <Typography
                                        margin='6px 0 0'
                                        variant='caption'>
                                        <code>{it.prop}</code>
                                    </Typography>
                                </FlexBetweenColumn>
                            ))}
                        </ContainerProps>
                    </FlexColumn>
                </DescriptionProps>
            </ContainerContent>

            <Content>
                <Typography variant='h6' margin='16px 0 0'>
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
                                                sx={{ color: primary.main }}
                                                variant={it.variant}>
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
