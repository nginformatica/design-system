import styled from '@emotion/styled'
import { TableBody, TableCell } from 'flipper-ui'
import { theme } from 'flipper-ui/theme'

const { green } = theme.colors

export const TableBodyTransparent = styled(TableBody)`
    border: 1px solid transparent;
`

export const TableCellTransparent = styled(TableCell)`
    && {
        border: 1px solid transparent;
    }
`
interface SquareProps {
    size: number
}

export const Square = styled.div<SquareProps>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${green[50]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: darkolivegreen;
    font-weight: 600;
`
