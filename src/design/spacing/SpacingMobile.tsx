import React from 'react'
import { Table, TableHead, TableRow, Typography } from 'flipper-ui'
import { TableBodyTransparent, TableCellTransparent, Square } from './styles'
import {
    Content,
    Wrapper,
    Container,
    ContainerProps,
    ContainerContent,
    FlexBetweenColumn
} from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const { gray, primary } = theme.colors

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

const sizes = [8, 16, 24, 32, 40, 48, 56, 64, 72]

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
            <Typography variant='h5' fontWeight={600} sx={{ color: gray[800] }}>
                ESPAÇAMENTO MOBILE
            </Typography>

            <hr />

            <ContainerContent>
                <Typography variant='body1' margin='12px 0' align='justify'>
                    O sistema de grade baseado em 8 pontos (8pt Grid) é
                    amplamente utilizado no design por sua simplicidade e
                    capacidade de adaptação a diferentes tamanhos de tela. Ao
                    utilizar múltiplos de 8 (como 8, 16, 24, etc.) para
                    dimensões, preenchimento e margens, é possível criar
                    interfaces consistentes, organizadas e com ritmo visual
                    agradável.
                </Typography>
                <ContainerProps justify name='spacing-size'>
                    {sizes.map(size => (
                        <Square key={size} size={size}>
                            {size}
                        </Square>
                    ))}
                </ContainerProps>

                <Typography variant='inherit' margin='12px 0' align='justify'>
                    <b>Mas por que 8 pontos?</b>
                </Typography>

                <Typography variant='body1' margin='12px 0' align='justify'>
                    <ul>
                        <li>
                            <b>Escalabilidade</b>: O sistema de 8 pontos se
                            adapta bem a diferentes tamanhos de tela, mantendo a
                            consistência visual em todos os dispositivos.
                        </li>
                        <li>
                            <b>Estética</b>: Aplicar esse sistema resulta em
                            designs mais organizados, limpos e visualmente
                            agradáveis.
                        </li>
                    </ul>
                </Typography>

                <Typography variant='body1' margin='12px 0' align='justify'>
                    Tanto a <b>Apple</b> quanto o <b>Google</b> recomendam o uso
                    desse sistema em suas diretrizes de design.
                </Typography>

                <Typography variant='h6' margin='12px 0' align='justify'>
                    Princípio
                </Typography>

                <Typography variant='body1' margin='12px 0' align='justify'>
                    <ul>
                        <li>
                            Utilize <b>múltiplos de 8px</b> para definir
                            tamanhos e espaçamentos.
                        </li>
                        <li>
                            Alinhe os elementos a uma{' '}
                            <b>grade imaginária de 8px</b>.
                        </li>
                        <li>
                            Garanta que tamanhos, margens, paddings e gaps sigam
                            essa escala.
                        </li>
                        <li>
                            Mantenha o sistema <b>responsivo e modular</b>,
                            capaz de se adaptar a diferentes resoluções.
                        </li>
                    </ul>
                </Typography>
            </ContainerContent>

            <ContainerContent>
                <Typography variant='h6' margin='12px 0' align='justify'>
                    Espaçamento
                </Typography>

                <Typography variant='body1' margin='12px 0' align='justify'>
                    O espaçamento adequado é fundamental para uma interface
                    visualmente limpa, organizada e fácil de usar. Aplicando os
                    princípios do sistema de 8 pontos — como 8px, 16px, 24px,
                    32px, e assim por diante — você garante uma hierarquia
                    visual clara entre os elementos. Em casos específicos,
                    pode-se usar 4px para ajustes mais finos.
                </Typography>
            </ContainerContent>

            <Content>
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
                                                    color: primary.main
                                                }}>
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

            <ContainerContent>
                <Typography variant='body1' margin='12px 0' align='justify'>
                    Exemplo de uso no flutter:
                </Typography>
                <ContainerProps align name='spacing-usage'>
                    <FlexBetweenColumn>
                        <Typography variant='caption'>
                            <pre>
                                <code>
                                    {`class Spacing {
  static const double xs = 4;
  static const double sm = 8;
  static const double md = 16;
  static const double lg = 24;
  static const double xl = 32;
  static const double xxl = 48;
  static const double xxxl = 64;
}`}
                                </code>
                            </pre>
                        </Typography>
                    </FlexBetweenColumn>
                </ContainerProps>
            </ContainerContent>
        </Wrapper>
    )
}
