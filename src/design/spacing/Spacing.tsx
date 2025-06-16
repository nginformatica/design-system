import React from 'react'
import { Typography } from 'flipper-ui'
import grid from '../../../assets/grid.svg'
import grids from '../../../assets/grids.svg'
import { ImageContainer, Square } from './styles'
import {
    Wrapper,
    ContainerProps,
    ContainerContent,
    FigmaRedirect
} from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const { gray } = theme.colors

const sizes = [4, 8, 12, 16, 20, 24, 28, 32]

export const Spacing = () => {
    return (
        <Wrapper>
            <Typography variant='h6' sx={{ color: gray[800] }}>
                ESPAÇAMENTO
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
                    O espaçamento adequado é fundamental para uma interface
                    visualmente limpa, organizada e fácil de usar. Aplicando os
                    princípios do 8pt Grid System — como 8px, 16px, 24px, 32px,
                    e assim por diante — é possível garantir uma hierarquia
                    visual clara entre os elementos. Em casos específicos,
                    <b>
                        {' '}
                        pode-se usar 4px para ajustes mais finos (ex: 4px, 8px,
                        12px, etc),{' '}
                    </b>
                    para componentes ou telas menores.
                </Typography>

                <Typography margin='16px 0' align='justify'>
                    O sistema de grade baseado em 8 pontos (8pt Grid) é
                    amplamente utilizado no design por sua simplicidade e
                    capacidade de adaptação a diferentes tamanhos de tela. Ao
                    utilizar múltiplos de 8 <b>(como 8, 16, 24, etc.) </b>
                    para dimensões, preenchimento e margens, é possível criar
                    interfaces consistentes, organizadas e com ritmo visual
                    agradável.
                </Typography>

                <ContainerProps justify name='spacing-size'>
                    {sizes.map(size => (
                        <Square key={size} size={size * 4}>
                            <Typography variant='button'>{size}</Typography>
                        </Square>
                    ))}
                </ContainerProps>

                <Typography variant='body1' margin='16px 0' fontWeight={600}>
                    Mas por que 8 pontos?
                </Typography>

                <Typography margin='16px 0'>
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

                <Typography margin='16px 0' align='justify'>
                    Tanto a <b>Apple</b> quanto o <b>Google</b> recomendam o uso
                    desse sistema em suas diretrizes de design.
                </Typography>

                <Typography variant='body1' margin='16px 0' fontWeight={600}>
                    Princípios
                </Typography>

                <Typography margin='16px 0'>
                    <ul>
                        <li>
                            Utilize <b>múltiplos de 8px</b> para definir
                            tamanhos e espaçamentos;
                        </li>
                        <li>
                            Alinhe os elementos a uma{' '}
                            <b>grade imaginária de 8px</b>;
                        </li>
                        <li>
                            Garanta que tamanhos, margens, paddings e gaps sigam
                            essa escala;
                        </li>
                        <li>
                            Mantenha o sistema <b>responsivo e modular</b>,
                            capaz de se adaptar a diferentes resoluções.
                        </li>
                    </ul>
                </Typography>
            </ContainerContent>

            <Typography variant='h6' sx={{ color: gray[800] }}>
                GRID
            </Typography>

            <hr />

            <ContainerContent>
                <Typography margin='16px 0' align='justify'>
                    Os grids garantem a consistência entre os designs. A grade
                    de layout é composta por três elementos:{' '}
                    <b>colunas, gutters </b>
                    (espaçamento entre as colunas) e <b>margens </b>
                    (esquerda e direita da tela).
                </Typography>

                <ImageContainer>
                    <img src={grid} alt='Grid' width='100%' />
                </ImageContainer>

                <Typography margin='24px 0 16px 0'>
                    Dependendo da necessidade, pode-se usar:
                    <ul>
                        <li>
                            <b>grades fluidas </b>
                            que se ajustam à tela inteira com largura de coluna
                            adaptável;
                        </li>
                        <li>
                            <b>grades fixas </b>
                            com largura de coluna fixa.
                        </li>
                    </ul>
                </Typography>

                <ImageContainer>
                    <img src={grids} alt='Grids' width='100%' />
                </ImageContainer>
            </ContainerContent>
        </Wrapper>
    )
}
