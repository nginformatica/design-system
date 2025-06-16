import React from 'react'
import { Table, TableHead, TableRow, Typography } from 'flipper-ui'
import { TableBodyTransparent, TableCellTransparent } from './styles'
import {
    Content,
    Wrapper,
    Container,
    ContainerContent
} from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const { gray } = theme.colors

type ITableBody = {
    acronym: string
    meaning: string
    size: string
    interpretation: string
    usageSuggestion: string
}[]

const tableHead = [
    'Sigla',
    'Significado',
    'Tamanho (px)',
    'Interpretação',
    'Sugestão de uso'
]

const tableBody: ITableBody = [
    {
        acronym: 'xs',
        meaning: 'Extra Small',
        size: '4px',
        interpretation: 'Muito pequeno',
        usageSuggestion: 'SizedBox(height: 4), espaçamento entre ícone e texto'
    },
    {
        acronym: 'sm',
        meaning: 'Small',
        size: '8px',
        interpretation: 'Pequeno',
        usageSuggestion: 'EdgeInsets.all(8), margens internas pequenas'
    },
    {
        acronym: 'md',
        meaning: 'Medium',
        size: '16px',
        interpretation: 'Padrão',
        usageSuggestion:
            'EdgeInsets.symmetric(horizontal: 16), SizedBox(height: 16)'
    },
    {
        acronym: 'lg',
        meaning: 'Large',
        size: '24px',
        interpretation: 'Acima do padrão',
        usageSuggestion:
            'SizedBox(height: 24), espaçamento entre cards ou blocos'
    },
    {
        acronym: 'xl',
        meaning: 'Extra Large',
        size: '32px',
        interpretation: 'Grande',
        usageSuggestion: 'EdgeInsets.all(32), espaço para áreas amplas'
    },
    {
        acronym: 'xxl',
        meaning: 'Extra Extra Large',
        size: '48px',
        interpretation: 'Muito grande',
        usageSuggestion: 'Padding(padding: EdgeInsets.all(48)), páginas amplas'
    },
    {
        acronym: 'xxxl',
        meaning: 'Triple Extra Large',
        size: '64px',
        interpretation: 'Enorme',
        usageSuggestion: 'EdgeInsets.all(64), containers principais, headers'
    }
]

export const SpacingMobile = () => {
    return (
        <Wrapper>
            <ContainerContent>
                <Typography variant='h6' sx={{ color: gray[800] }}>
                    ESPAÇAMENTO MOBILE
                </Typography>

                <hr />

                <Typography margin='16px 0' align='justify'>
                    Em interfaces mobile, o espaçamento adequado é essencial
                    para garantir legibilidade, toque confortável e uma
                    experiência fluida. O uso do sistema de 8 pontos — com
                    múltiplos de 8px como 8, 16, 24 e 32px — ajuda a manter a
                    consistência visual e a facilitar o alinhamento dos
                    elementos. Para ajustes finos em telas pequenas,
                    espaçamentos de 4px também podem ser utilizados.
                </Typography>
            </ContainerContent>

            <Content>
                <Container name='mui-mobile-spacing'>
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
                                            <Typography fontWeight={500}>
                                                {it.acronym}
                                            </Typography>
                                        </TableCellTransparent>
                                        <TableCellTransparent
                                            align='center'
                                            padding='56px 0px'>
                                            <Typography>
                                                {it.meaning}
                                            </Typography>
                                        </TableCellTransparent>
                                        <TableCellTransparent
                                            align='center'
                                            padding='56px 0px'>
                                            <Typography>{it.size}</Typography>
                                        </TableCellTransparent>
                                        <TableCellTransparent
                                            align='center'
                                            padding='56px 0px'>
                                            <Typography>
                                                {it.interpretation}
                                            </Typography>
                                        </TableCellTransparent>
                                        <TableCellTransparent
                                            align='center'
                                            padding='56px 0px'>
                                            <Typography>
                                                {it.usageSuggestion}
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
