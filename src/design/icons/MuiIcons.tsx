import React, { useState } from 'react'
import { SnackBar, Tooltip, Typography } from 'flipper-ui'
import * as icons from 'flipper-ui/icons/mui-icons'
import {
    Container,
    ContainerIcon,
    ContainerProps,
    DescriptionProps,
    PropsDescription
} from './styles'
import {
    ContainerTitle,
    ContainerContent,
    Description,
    Wrapper,
    FigmaRedirect,
    FlexBetweenColumn,
    Content,
    FlexColumn
} from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const { deepOrange, indigo, neutral, primary, secondary } = theme.colors

const iconSize = [
    {
        icon: <icons.IconEdit fontSize='small' />,
        size: '20x20',
        prop: "<IconEdit fontSize='small' />"
    },
    {
        icon: <icons.IconEdit fontSize='medium' />,
        size: '24x24',
        prop: "<IconEdit fontSize='small' />"
    },
    {
        icon: <icons.IconEdit fontSize='large' />,
        size: '35x35',
        prop: "<IconEdit fontSize='small' />"
    },
    {
        icon: <icons.IconEdit sx={{ fontSize: 40 }} />,
        size: '40x40',
        prop: '<IconEdit sx={{ fontSize: 40 }} />'
    }
]

const iconColor = [
    {
        icon: <icons.IconEdit fontSize='large' sx={{ color: primary.main }} />,
        prop: "<IconEdit color='primary' />"
    },
    {
        icon: (
            <icons.IconEdit fontSize='large' sx={{ color: secondary.main }} />
        ),
        prop: "<IconEdit color='secondary' />"
    },
    {
        icon: (
            <icons.IconEdit fontSize='large' sx={{ color: deepOrange[600] }} />
        ),
        prop: "<IconEdit color='error' />"
    },
    {
        icon: <icons.IconEdit fontSize='large' sx={{ color: indigo[600] }} />,
        prop: '<IconEdit sx={{ color: indigo[600] }} />'
    }
]

export const MuiIcons = () => {
    const [icon, setIcon] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false)

    const handleCopyToClipboard = (iconName: string) => {
        navigator.clipboard
            .writeText(`import { ${iconName} } from 'flipper-ui/icons/mui'`)
            .then(() => {
                setIcon(iconName)
                setOpen(true)
                setTimeout(() => setOpen(false), 3500)
            })
            .catch(err => console.error('Failed to copy text: ', err))
    }

    const handleMessage = () => {
        return (
            <span>
                <b>
                    <code>{`<${icon} /> `}</code>
                </b>{' '}
                copiado para a área de transferência!
            </span>
        )
    }

    return (
        <Wrapper>
            <ContainerTitle>ÍCONES @mui</ContainerTitle>
            <hr />
            <FigmaRedirect
                href='https://www.figma.com/design/X7IRemjcDX38XcunlLKuVn/Foundations?node-id=0-1&t=j30FU4pxY1hsVu3m-1'
                target='_blank'
                rel='noreferrer'>
                VISUALIZE NO FIGMA 🎨
            </FigmaRedirect>

            <ContainerContent>
                <Description>
                    Como nossos ícones são utilizados diretamente do{' '}
                    <a
                        href='https://mui.com/material-ui/material-icons/'
                        target='_blank'
                        rel='noreferrer'
                        style={{
                            color: neutral[200]
                        }}>
                        <b>@mui/icons</b>
                    </a>
                    , eles contam com algumas props nativas que podem ser
                    alteradas. No entando, recomenda-se evitar ao máximo burlar
                    as características originas propostas para os ícones, a fim
                    de padronizar as aplicações.
                </Description>

                <DescriptionProps>
                    <FlexColumn>
                        <PropsDescription>
                            <Typography variant='h6'>Tamanho</Typography>
                            <Typography>
                                Para alterar o tamanho de um ícone, utilize a
                                prop{' '}
                                <b>
                                    <code>fontSize</code>
                                </b>
                                . Ela aceita valores de{' '}
                                <b>
                                    <code>"small" | "medium" | "large"</code>
                                </b>
                                , sendo o{' '}
                                <b>
                                    <code>"medium"</code>
                                </b>{' '}
                                o tamanho default. Para tamanhos diferentes,
                                utilize a prop{' '}
                                <b>
                                    <code>sx</code>
                                </b>
                                , especificando o tamanho do ícone através do{' '}
                                <b>
                                    <code>fontSize.</code>
                                </b>
                            </Typography>
                        </PropsDescription>

                        <ContainerProps align justify name='mui-icons-size'>
                            {iconSize.map((it, i) => (
                                <FlexBetweenColumn key={i}>
                                    {it.icon}
                                    <Typography
                                        fontSize={10}
                                        margin='12px 0 0'
                                        variant='caption'
                                        color='textSecondary'>
                                        <code>{it.size}</code>
                                    </Typography>
                                    <Typography variant='caption' fontSize={11}>
                                        <code>{it.prop}</code>
                                    </Typography>
                                </FlexBetweenColumn>
                            ))}
                        </ContainerProps>
                    </FlexColumn>

                    <FlexColumn>
                        <PropsDescription>
                            <Typography variant='h6'>Cores</Typography>
                            <Typography>
                                Para alterar a cor de um ícone. utilize a prop{' '}
                                <b>
                                    <code>color</code>
                                </b>
                                . Ela aceita os valores de{' '}
                                <b>
                                    <code>
                                        "inherit" | "disabled" | "primary" |
                                        "secondary" | "error" | "warning".
                                    </code>
                                </b>
                                Para cores diferentes, utilize a prop{' '}
                                <b>
                                    <code>sx</code>
                                </b>
                                , especificando a cor do ícone através do{' '}
                                <b>
                                    <code>color.</code>
                                </b>
                            </Typography>
                        </PropsDescription>

                        <ContainerProps justify name='mui-icons-color'>
                            {iconColor.map((it, i) => (
                                <FlexBetweenColumn key={i}>
                                    {it.icon}
                                    <Typography
                                        margin='12px 0 0'
                                        variant='caption'
                                        fontSize={11}>
                                        <code>{it.prop}</code>
                                    </Typography>
                                </FlexBetweenColumn>
                            ))}
                        </ContainerProps>
                    </FlexColumn>
                </DescriptionProps>
            </ContainerContent>

            <Content>
                <Typography margin='24px 0 0' variant='h6'>
                    Ícones
                </Typography>
                <Container name='mui-icons'>
                    {Object.entries(icons).map(
                        ([iconName, IconComponent], i) => (
                            <ContainerIcon key={i}>
                                <Tooltip title='Copiar Referência'>
                                    <icons.IconContentCopy
                                        sx={{
                                            position: 'absolute',
                                            color: primary.light,
                                            cursor: 'pointer',
                                            fontSize: '16px',
                                            top: '12px',
                                            right: '12px'
                                        }}
                                        onClick={() =>
                                            handleCopyToClipboard(iconName)
                                        }
                                    />
                                </Tooltip>
                                <IconComponent
                                    fontSize='large'
                                    sx={{ color: primary.main }}
                                />
                                <Typography
                                    margin='24px 0 0'
                                    variant='caption'
                                    fontSize='11.5px'>
                                    <code>{`<${iconName} />`}</code>
                                </Typography>
                            </ContainerIcon>
                        )
                    )}
                </Container>
            </Content>

            <SnackBar
                open={open}
                variant='success'
                message={handleMessage()}
                onClose={() => setOpen(false)}
            />
        </Wrapper>
    )
}
