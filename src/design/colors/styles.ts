import styled from '@emotion/styled'
import { Paper } from 'flipper-ui'
import { ContentBold, FlexBetween } from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const { gray, neutral } = theme.colors

interface IProps {
    background: string
    light?: boolean
}

export const isLightColor = (hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16)
    const g = parseInt(hexColor.slice(3, 5), 16)
    const b = parseInt(hexColor.slice(5, 7), 16)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000

    return brightness > 200
}

export const HeaderColor = styled(ContentBold)`
    padding-bottom: 24px;
    text-transform: capitalize;
`

export const CardHeader = styled.div<IProps>`
    padding: 16px;
    background-color: ${props => props.background};
    color: ${props => (props.light ? gray[800] : neutral[50])};
`

export const Container = styled(Paper)`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 16px;
    margin-top: 24px;
    font-size: 14px;
`

export const ColorsCard = styled.div`
    border-radius: 4px;
    overflow: hidden;
    height: fit-content;
    box-shadow:
        0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const CardColor = styled(FlexBetween)<IProps>`
    padding: 14px 12px;
    background-color: ${props => props.background};
    color: ${props => (props.light ? gray[800] : neutral[50])};
`
