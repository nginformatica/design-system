import React, { useState } from 'react'
import { SnackBar, Tooltip, Typography } from 'flipper-ui'
import { IconContentCopy } from 'flipper-ui/icons/mui-icons'
import * as icons from 'flipper-ui/icons/specific'
import {
    Container,
    ContainerIcon,
    ContainerProps,
    DescriptionProps,
    IconWrapper,
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

const { primary, indigo } = theme.colors

const iconProps = [
    {
        icon: (
            <icons.IconBranch
                color={indigo[300]}
                width={30}
                height={30}
                viewBox='0 0 30 30'
            />
        ),
        prop: (
            <div style={{ whiteSpace: 'pre-wrap' }}>
                {`
    <IconBranch
        width={30}
        height={30}
        color={indigo[300]}
        viewBox='0 0 30 30' />`}
            </div>
        )
    },
    {
        icon: (
            <icons.IconBranch
                color={indigo[400]}
                width={40}
                height={40}
                viewBox='0 0 30 30'
            />
        ),
        prop: (
            <div style={{ whiteSpace: 'pre-wrap' }}>
                {`
    <IconBranch
        width={40}
        height={40}
        color={indigo[400]}
        viewBox='0 0 30 30' />`}
            </div>
        )
    },
    {
        icon: (
            <icons.IconBranch
                color={indigo[500]}
                width={50}
                height={50}
                viewBox='0 0 30 30'
            />
        ),
        prop: (
            <div style={{ whiteSpace: 'pre-wrap' }}>
                {`
    <IconBranch
        width={50}
        height={50}
        color={indigo[400]}
        viewBox='0 0 30 30' />`}
            </div>
        )
    },
    {
        icon: (
            <icons.IconBranch
                color={indigo[600]}
                width={60}
                height={60}
                viewBox='0 0 30 30'
            />
        ),
        prop: (
            <div style={{ whiteSpace: 'pre-wrap' }}>
                {`
    <IconBranch
        width={60}
        height={60}
        color={indigo[600]}
        viewBox='0 0 30 30' />`}
            </div>
        )
    }
]

const iconOptions = [
    'IconAET',
    'IconLTCAT',
    'IconLTP',
    'IconPAE',
    'IconPCMAT',
    'IconPCMSO',
    'IconPGR',
    'IconPGRTR',
    'IconPPR',
    'IconPPRA',
    'IconScheduleHour',
    'IconMail',
    'IconFaceScan',
    'IconWarningSpecific',
    'IconGift',
    'IconBillet',
    'IconThirdParty',
    'IconChangeEquipment',
    'IconFluig',
    'IconESocial',
    'IconWindows',
    'IconCompany',
    'IconMediumCompany',
    'IconMegaCompany',
    'IconMinimumCompany',
    'IconSmallCompany',
    'IconSuperCompany'
]

export const SpecificIcons = () => {
    const [icon, setIcon] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false)

    const handleCopyToClipboard = (iconName: string) => {
        navigator.clipboard
            .writeText(
                `import { ${iconName} } from 'flipper-ui/icons/specific/${iconName}'`
            )
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

    const handleColor = (iconName: string) => {
        if (
            iconName === 'IconBillet' ||
            iconName === 'IconEquipment' ||
            iconName === 'IconChangeEquipment'
        ) {
            return primary.main
        }

        return ''
    }

    const handleSize = (iconName: string) => {
        if (
            iconName === 'IconCircle' ||
            iconName === 'IconTriangleDown' ||
            iconName === 'IconTriangleUp'
        ) {
            return 30
        }

        if (iconOptions.includes(iconName)) {
            return 36
        }

        return 45
    }

    const handleViewBox = (iconName: string) => {
        if (
            iconName === 'IconFunil' ||
            iconName === 'IconSupplier' ||
            iconName === 'IconMaterial' ||
            iconName === 'IconEquipment' ||
            iconName === 'IconDownloadQRCode'
        ) {
            return '0 0 28 28'
        }

        if (iconOptions.includes(iconName) || iconName === 'IconHealth') {
            return
        }

        return '0 0 32 32'
    }

    return (
        <Wrapper>
            <ContainerTitle>ÍCONES ESPECÍFICOS</ContainerTitle>
            <hr />
            <FigmaRedirect
                href='https://www.figma.com/design/X7IRemjcDX38XcunlLKuVn/Foundations?node-id=0-1&t=j30FU4pxY1hsVu3m-1'
                target='_blank'
                rel='noreferrer'>
                VISUALIZE NO FIGMA 🎨
            </FigmaRedirect>

            <ContainerContent>
                <Description>
                    Para garantir uma interface harmônica e coerente, alguns
                    ícones foram criados para propósitos específicos em cada
                    aplicação. Eles também podem ser modificados para melhor
                    atender o contexto em que será utilizado.
                </Description>

                <DescriptionProps>
                    <FlexColumn>
                        <PropsDescription>
                            <Typography variant='h6'>Propriedades</Typography>
                            <Typography>
                                Para alterar o tamanho de um ícone, utilize as
                                props{' '}
                                <b>
                                    <code>"width" | "height" | "viewBox"</code>
                                </b>
                                . Os ícones já vem com os valores para essas
                                propriedades definidas, caso não passadas, esses
                                valores serão usados como default. Como o ícone
                                é um svg, tome cuidado na hora de atualizar
                                essas propriedades. Para alterar a cor do ícone,
                                utilize a prop{' '}
                                <b>
                                    <code>color</code>
                                </b>
                                , mas atenção, nem todos os ícones são
                                otimizáveis.
                            </Typography>
                        </PropsDescription>

                        <ContainerProps align justify name='mui-icons-size'>
                            {iconProps.map((it, i) => (
                                <FlexBetweenColumn key={i}>
                                    {it.icon}
                                    <Typography variant='caption' fontSize={11}>
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
                                    <IconContentCopy
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
                                <IconWrapper>
                                    <IconComponent
                                        active
                                        color={handleColor(iconName)}
                                        width={handleSize(iconName)}
                                        height={handleSize(iconName)}
                                        viewBox={handleViewBox(iconName)}
                                    />
                                </IconWrapper>
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
