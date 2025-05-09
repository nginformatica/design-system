import React, { useState } from 'react'
import { SnackBar, Tooltip, Typography } from 'flipper-ui'
import * as icons from 'flipper-ui/icons/mui'
import { mobileIcons } from './mobile-utils/MaterialIconGallery'
import { ContainerIcon } from './styles'
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

const { deepOrange, gray, indigo, neutral, primary, secondary } = theme.colors

const iconSizeMobile = [
    {
        icon: <icons.IconEdit fontSize='small' />,
        size: '20x20',
        prop: `Icon(
    NGAssets.icons.edit,
    size: 20,
)`
    },
    {
        icon: <icons.IconEdit fontSize='medium' />,
        size: '24x24',
        prop: `Icon(
    NGAssets.icons.edit,
    size: 24,
)`
    },
    {
        icon: <icons.IconEdit fontSize='large' />,
        size: '35x35',
        prop: `Icon(
    NGAssets.icons.edit,
    size: 35,
)`
    },
    {
        icon: <icons.IconEdit sx={{ fontSize: 40 }} />,
        size: '40x40',
        prop: `Icon(
    NGAssets.icons.edit,
    size: 40,
)`
    }
]

const iconColorMobile = [
    {
        icon: <icons.IconEdit fontSize='large' sx={{ color: primary.main }} />,
        prop: `Icon(
    NGAssets.icons.edit,
    color: NGColors.darkBlue,
)`
    },
    {
        icon: (
            <icons.IconEdit fontSize='large' sx={{ color: secondary.main }} />
        ),
        prop: `Icon(
    NGAssets.icons.edit,
    color: Color(NGColors.secondary_dark),
)`
    },
    {
        icon: (
            <icons.IconEdit fontSize='large' sx={{ color: deepOrange[600] }} />
        ),
        prop: `Icon(
    NGAssets.icons.edit,
    color: Color(NGColors.danger),
)`
    },
    {
        icon: <icons.IconEdit fontSize='large' sx={{ color: indigo[600] }} />,
        prop: `Icon(
    NGAssets.icons.edit,
    color: NGColors.indigo.shade600,
)`
    }
]

export const MaterialIcons = () => {
    const [icon, setIcon] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false)

    const handleCopyToClipboard = (iconName: string) => {
        navigator.clipboard
            .writeText(`NGAssets.icons.${iconName}`)
            .then(() => {
                setIcon(`iconName`)
                setOpen(true)
                setTimeout(() => setOpen(false), 3500)
            })
            .catch(err => console.error('Failed to copy text: ', err))
    }

    const handleMessage = () => {
        return (
            <span>
                <b>
                    <code>{`${icon}`}</code>
                </b>{' '}
                copiado para a área de transferência!
            </span>
        )
    }

    return (
        <Wrapper>
            <Typography variant='h5' fontWeight={600} sx={{ color: gray[800] }}>
                ÍCONES Material UI
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
                    Parte da iconografia é utilizada diretamente do
                    <a
                        href='https://fonts.google.com/icons'
                        target='_blank'
                        rel='noreferrer'
                        style={{
                            color: neutral[200]
                        }}>
                        <b> Material Icons</b>
                    </a>
                    . Com isso, os ícones do Material UI importados através do
                    <b> ng-kit</b> contém nomes semelhantes em snake case.
                </Typography>
            </ContainerContent>

            <ContainerContent>
                <DescriptionProps>
                    <FlexColumn>
                        <PropsDescription>
                            <Typography variant='h6'>Tamanho</Typography>
                            <Typography>
                                Para alterar o tamanho de um ícone, utilize a
                                prop
                                <b>
                                    <code> size</code>
                                </b>
                                .
                            </Typography>
                        </PropsDescription>

                        <ContainerProps align justify name='mui-icons-size'>
                            {iconSizeMobile.map((it, i) => (
                                <FlexBetweenColumn key={i}>
                                    {it.icon}
                                    <Typography
                                        fontSize={10}
                                        margin='12px 0 0'
                                        variant='caption'
                                        color='textSecondary'>
                                        <code>{it.size}</code>
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
                            <Typography>
                                Para alterar a cor de um ícone, utilize a prop
                                <b>
                                    <code> color</code>
                                </b>
                                .
                            </Typography>
                        </PropsDescription>

                        <ContainerProps justify name='mui-icons-color'>
                            {iconColorMobile.map((it, i) => (
                                <FlexBetweenColumn key={i}>
                                    {it.icon}
                                    <Typography
                                        margin='12px 0 0'
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
                <Typography margin='24px 0 0' variant='h6'>
                    Ícones mobile
                </Typography>
                <Container name='mobile-icons'>
                    {mobileIcons.map(({ name, icon }, i) => (
                        <ContainerIcon key={i}>
                            <Tooltip title='Copiar Referência'>
                                <icons.IconContentCopy
                                    sx={{
                                        position: 'absolute',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        top: '12px',
                                        right: '12px'
                                    }}
                                    onClick={() => handleCopyToClipboard(name)}
                                />
                            </Tooltip>
                            {icon}
                            <Typography
                                margin='24px 0 0'
                                variant='caption'
                                fontSize='11.5px'>
                                <code>{`${name}`}</code>
                            </Typography>
                        </ContainerIcon>
                    ))}
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
