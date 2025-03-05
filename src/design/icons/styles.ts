import { default as styled } from 'styled-components'
import { FlexColumn } from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const { neutral } = theme.colors

export const IconWrapper = styled.div`
    width: 35px;
    height: 35px;
`

export const ContainerIcon = styled(FlexColumn)`
    min-height: 135px;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${neutral[100]}55;
    box-shadow: rgba(0, 0, 0, 0.15) 1.5px 1.5px 2.6px;
`
