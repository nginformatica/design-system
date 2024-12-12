import { default as styled } from 'styled-components'
import { Paper } from 'flipper-ui'
import { Flex, FlexColumn } from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const { neutral } = theme.colors

export const PropsDescription = styled.div``

export const Container = styled(Paper)`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    padding: 24px;
    margin-top: 12px;
`

export const ContainerProps = styled(Paper)<{
    align?: boolean
    justify?: boolean
}>`
    display: flex;
    gap: 6px;
    justify-content: ${props =>
        props.justify ? 'space-around' : 'space-between'};
    align-items: ${props => (props.align ? 'baseline' : 'center')};
    padding: 16px;
    margin-top: 12px;
    font-size: 14px;
    height: auto;
    min-height: 85px;
`

export const ContainerIcon = styled(FlexColumn)`
    position: relative;
    align-items: center;
    justify-content: center;
    min-height: 135px;
    border-radius: 8px;
    background-color: ${neutral[100]}55;
    box-shadow: rgba(0, 0, 0, 0.15) 1.5px 1.5px 2.6px;
`

export const DescriptionProps = styled(Flex)`
    gap: 16px;
    flex-wrap: wrap;
`

export const IconWrapper = styled.div`
    width: 35px;
    height: 35px;
`
