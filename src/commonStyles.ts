import { default as styled } from 'styled-components'

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
    padding: 3rem;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
`
