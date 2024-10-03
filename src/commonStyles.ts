import { default as styled } from 'styled-components'
import { theme } from 'flipper-ui/theme'

const { gray, neutral, primary } = theme.colors

export const Content = styled.div``

export const Flex = styled.div`
    display: flex;
`

export const FlexBetween = styled(Flex)`
    align-items: center;
    justify-content: space-between;
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

export const Description = styled.p`
    line-height: 24px;
`

export const ContentBold = styled.div`
    font-weight: 700;
`

export const ContainerTitle = styled(ContentBold)`
    font-size: 24px;
    color: ${gray[800]};
`

export const ContainerContent = styled.div`
    font-size: 16px;
    color: ${gray[900]};
`

export const FigmaRedirect = styled.a`
    text-decoration: none;
    font-size: 14px;
    color: ${primary.light};
    transition: font-size 0.5s ease-in-out;

    &:hover {
        font-size: 15px;
    }
`
