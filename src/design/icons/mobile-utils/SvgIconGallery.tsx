import React from 'react'
import styled from 'styled-components'
import { Tooltip, Typography } from 'flipper-ui'
import * as icons from 'flipper-ui/icons/mui'
import { ContainerIcon } from '../styles'

declare const require: {
    context: (
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp
    ) => {
        keys: () => string[]
        (id: string): string
    }
}

const requireSvg = require.context(
    '../../../../assets/icons/svg',
    false,
    /\.svg$/
)

const svgIcons = requireSvg.keys().map((key: string) => ({
    name: key.replace('./', '').replace('.svg', ''),
    src: requireSvg(key)
}))

const SvgIcon = styled.img`
    width: 32px;
    height: 32px;
`

const SvgIconComponent = ({ src, name }: { src: string; name: string }) => {
    return <SvgIcon src={src} alt={name} />
}

type SvgIconGalleryProps = {
    onClick: (iconName: string) => void
}

export const SvgIconGallery = ({ onClick }: SvgIconGalleryProps) => {
    return svgIcons.map(({ name, src }, i) => (
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
                    onClick={() => onClick(name)}
                />
            </Tooltip>
            <SvgIconComponent src={src} name={name} />
            <Typography margin='24px 0 0' variant='caption'>
                <code>{`${name}`}</code>
            </Typography>
        </ContainerIcon>
    ))
}
