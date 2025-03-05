import { default as styled } from 'styled-components'
import { Paper } from 'flipper-ui'
import { theme } from 'flipper-ui/theme'

const { gray, neutral, lightBlue } = theme.colors

export const Content = styled.div``

export const Flex = styled.div`
    display: flex;
`

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`

export const FlexBetween = styled(Flex)`
    align-items: center;
    justify-content: space-between;
`

export const FlexBetweenColumn = styled(FlexBetween)`
    flex-direction: column;
`

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    padding: 3.5rem;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: ${neutral[100]};
`

export const OrdenateList = styled.ol``

export const ListItems = styled.li`
    padding-bottom: 12px;
`

export const ContentBold = styled.div`
    font-weight: 600;
`

export const ContainerContent = styled.div`
    color: ${gray[900]};
`

export const FigmaRedirect = styled.a`
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color: ${lightBlue[600]};
    transition: color 0.4s ease-in-out;

    &:hover {
        color: ${lightBlue[800]};
    }
`

export const Container = styled(Paper)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 24px;
    padding: 24px;
    margin-top: 12px;
`

export const PropsDescription = styled.div``

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

export const DescriptionProps = styled(Flex)`
    gap: 16px;
    flex-wrap: wrap;
`
