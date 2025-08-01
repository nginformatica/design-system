import React, { useState } from 'react'
import { SnackBar, Tooltip, Typography } from 'flipper-ui'
import { IconContentCopy } from 'flipper-ui/icons/mui'
import { IcoMoonIconGallery } from './mobile-utils/IcomoonIconGallery'
import { SvgIconGallery } from './mobile-utils/SvgIconGallery'
import * as specificIcons from './web-utils/specific-icons'
import { ContainerIcon, IconWrapper } from './styles'
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

const { gray, indigo, primary } = theme.colors

const iconProps = [
    {
        icon: (
            <specificIcons.IconBranch
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
            <specificIcons.IconBranch
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
            <specificIcons.IconBranch
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
            <specificIcons.IconBranch
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
    'IconSuperCompany',
    'IconBelt',
    'IconBoot',
    'IconCoverall',
    'IconMask',
    'IconSafetyGlasses',
    'IconVest',
    'IconWeldingMask',
    'IconExams',
    'IconFirstSteps',
    'IconWorkPermission',
    'IconFireHydrant',
    'IconMandatesPartly',
    'IconMicrosoftEntra'
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
                setIcon(`<${iconName} /> `)
                setOpen(true)
                setTimeout(() => setOpen(false), 3500)
            })
            .catch(err => console.error('Failed to copy text: ', err))
    }

    const handleCopyMobileIconToClipboard = (iconName: string) => {
        navigator.clipboard
            .writeText(`NGAssets.icons.${iconName}`)
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
                    <code>{`${icon}`}</code>
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
            <Typography variant='h6' sx={{ color: gray[800] }}>
                ÍCONES ESPECÍFICOS
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
                    Para garantir uma interface harmônica e coerente, alguns
                    ícones foram criados para propósitos específicos em cada
                    aplicação. Eles também podem ser modificados para melhor
                    atender o contexto em que será utilizado.
                </Typography>

                <DescriptionProps>
                    <FlexColumn>
                        <PropsDescription>
                            <Typography variant='body1' fontWeight={500}>
                                Propriedades
                            </Typography>
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
                                    <Typography variant='caption'>
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
                    Ícones específicos web
                </Typography>
                <Container name='web-specific-icons'>
                    {Object.entries(specificIcons).map(
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
                                <Typography margin='24px 0 0' variant='caption'>
                                    <code>{`<${iconName} />`}</code>
                                </Typography>
                            </ContainerIcon>
                        )
                    )}
                </Container>
            </Content>

            <Content>
                <Typography variant='h6' margin='24px 0 0'>
                    Ícones específicos mobile
                </Typography>
                <Container name='mobile-specific-icons'>
                    <IcoMoonIconGallery
                        onClick={handleCopyMobileIconToClipboard}
                    />
                    <SvgIconGallery onClick={handleCopyMobileIconToClipboard} />
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
