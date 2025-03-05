import { default as styled } from 'styled-components'
import { TableBody, TableCell } from 'flipper-ui'

export const TableBodyTransparent = styled(TableBody)`
    border: 1px solid transparent;
`

export const TableCellTransparent = styled(TableCell)`
    && {
        border: 1px solid transparent;
    }
`
