import styled from '@emotion/styled'
import { TableBody, TableCell } from 'flipper-ui'
import { theme } from 'flipper-ui/theme'

const { gray, green, neutral, primary } = theme.colors

interface SquareProps {
    size: number
}

export const TableBodyTransparent = styled(TableBody)`
    border: 1px solid transparent;
`

export const TableCellTransparent = styled(TableCell)`
    && {
        border: 1px solid transparent;
    }
`

export const Square = styled.div<SquareProps>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${green[600]};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${neutral[50]};
`

export const ImageContainer = styled.div`
    margin: 0 auto;
    display: flex;
    max-width: 1080px;
`

export const ColumnsContent = styled.div`
    margin: 16px 0;
`

export const ColumnsContainer = styled.div`
    justify-content: center;
    border: 1px solid ${gray[400]};
    border-radius: 4px;
    padding: 8px;
    max-width: 400;
    margin: 0 auto;
`

export const ColumnsSpacing = styled(ColumnsContainer)`
    display: flex;
    gap: 4px;
`

export const ColumnsFluid = styled(ColumnsContainer)`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 2fr;
`

export const ColumnsFixed = styled(ColumnsContainer)`
    display: grid;
    gap: 8px;
    grid-template-columns: 120px 160px;
`

export const Column = styled.div<{ color: string }>`
    background-color: ${props => props.color};
    height: 40px;
`

export const Spacing = styled.div`
    background-color: ${primary.main};
    height: 40px;
    width: 40px;
`
