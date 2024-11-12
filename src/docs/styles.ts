import { default as styled } from 'styled-components'
import bg from '../../assets/bg.png'
import { theme } from 'flipper-ui/theme'

const { neutral } = theme.colors

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 3rem;
    background: url(${bg as string}) no-repeat center center fixed;
    background-size: cover;
`

export const LogoWrapper = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ImageWrapper = styled.img`
    width: 100%;
`

export const Text = styled.h3`
    color: ${neutral[50]};
    font-family: Roboto, Helvetica, Arial, sans-serif;
    letter-spacing: 0.25rem;
    text-align: center;
    margin: 6px 0 0 0;
`
