import React from 'react'
import { Tooltip, Typography } from 'flipper-ui'
import * as icons from 'flipper-ui/icons/mui'
import icomoonIconList from '../../../../assets/icons/icomoon/icomoon.json'
import { ContainerIcon } from '../styles'
import { theme } from 'flipper-ui/theme'

const { primary } = theme.colors

type IcomoonIconGalleryProps = {
    onClick: (iconName: string) => void
}

export const IcoMoonIconGallery = ({ onClick }: IcomoonIconGalleryProps) => {
    return icomoonIconList.map((name: string) => (
        <ContainerIcon key={name}>
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
            <span
                className={`icon icon-${name}`}
                style={{ fontSize: 32, color: primary.main }}
            />
            <Typography margin='24px 0 0' variant='caption' fontSize='11.5px'>
                <code>{`${name}`}</code>
            </Typography>
        </ContainerIcon>
    ))
}
